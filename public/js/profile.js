const newFormHandler = async (event) => {
    event.preventDefault();

    const mood = document.querySelector('#mood').value.trim();;
    const moodData = document.querySelector('#moodData').value.trim();
  
    if (mood && moodData) {
      const response = await fetch(`/api/Mood.js`, {
        method: 'POST',
        body: JSON.stringify({ mood, moodData }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to add mood');
      }
    }
  };