import React, { useState, useEffect } from "react";
import './StreamList.css';  // Importing the CSS file for styling

function StreamList() {
  const [userInput, setUserInput] = useState("");
  const [events, setEvents] = useState([]);

  // Load events from localStorage when the component mounts
  useEffect(() => {
    const savedEvents = localStorage.getItem('events');
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents));  // Set events from localStorage
    }
  }, []);

  // Save events to localStorage whenever they change
  useEffect(() => {
    if (events.length > 0) {
      localStorage.setItem('events', JSON.stringify(events));  // Save events to localStorage
    } else {
      localStorage.removeItem('events'); // Remove from localStorage when no events exist
    }
  }, [events]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userInput.trim() === "") {
      alert("Please enter a valid event!");
      return;
    }

    const newEvent = {
      id: Date.now(),
      name: userInput,
      completed: false,
    };

    // Use functional form of setEvents to ensure the latest state is used
    setEvents((prevEvents) => [...prevEvents, newEvent]);
    setUserInput("");
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleEdit = (id) => {
    const updatedName = prompt("Edit event name:");
    if (updatedName) {
      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event.id === id ? { ...event, name: updatedName } : event
        )
      );
    }
  };

  const handleDelete = (id) => {
    setEvents((prevEvents) => {
      const updatedEvents = prevEvents.filter((event) => event.id !== id);
      // Update localStorage with the new list of events after deletion
      localStorage.setItem('events', JSON.stringify(updatedEvents));
      return updatedEvents;
    });
  };

  const handleComplete = (id) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === id ? { ...event, completed: !event.completed } : event
      )
    );
  };

  return (
    <div className="stream-list">
      <h1>StreamList</h1>

      {/* Form for input */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Enter an event"
        />
        <button type="submit">
          <i className="fa fa-plus"></i> Add Event
        </button>
      </form>

      {/* List of events */}
      <div className="event-list">
        <ul>
          {events.map((event) => (
            <li
              key={event.id}
              className={event.completed ? 'completed' : ''}  // Apply completed class if event is marked completed
              style={{ textDecoration: event.completed ? "line-through" : "none" }}
            >
              <span>{event.name}</span>
              <button onClick={() => handleEdit(event.id)}>Edit</button>
              <button onClick={() => handleComplete(event.id)}>
                {event.completed ? "Undo" : "Complete"}
              </button>
              <button onClick={() => handleDelete(event.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StreamList;
