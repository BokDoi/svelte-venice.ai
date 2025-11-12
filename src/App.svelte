<script>
  //disable CORS in chrome:  chrome.exe --disable-web-security --user-data-dir="C:\chrome-dev-data"
  import { onMount } from 'svelte';

  let userInput = '';
  let responses = [];

  onMount(async () => {
    // Initialize any necessary state or fetch data here
  });

  const sendMessage = async () => {
    if (userInput.trim() === '') return;

    // Add the user's message to the responses array
    responses = [...responses, { type: 'user', text: userInput }];

    // Clear the input field
    userInput = '';

    try {
      // Send the user input to Venice AI and get the response
      const response = await fetch('https://api.venice.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer 6wXFb8y0p0laBfW5CZnzhzfkazKT8znDR4K_a1qwnT`  // Replace with your actual API key
        },
        body: JSON.stringify({ model: "venice-uncensored", messages: [{ role: 'user', content: userInput }] })
      });

      const data = await response.json();

      // Log the entire response from Venice AI
      console.log('Response from Venice AI:', data);

      // Extract the AI's response from the OpenAI format
      const aiResponse = data.choices[0].message.content;

      // Log the AI's response
      console.log('AI Response:', aiResponse);

      // Add the AI's response to the responses array
      responses = [...responses, { type: 'ai', text: aiResponse }];
    } catch (error) {
      console.error('Error sending message to Venice AI:', error);
    }
  };
</script>

<main>
  <style>
    .chat-container {
      display: flex;
      flex-direction: column;
      height: 100vh;
      background-color: #f4f4f4;
    }

    .chat-window {
      flex: 1;
      overflow-y: auto;
      padding: 20px;
    }

    .message {
      margin: 10px 0;
    }

    .user-message {
      text-align: right;
      color: #007bff;
    }

    .ai-message {
      text-align: left;
      color: #28a745;
    }

    .input-container {
      display: flex;
      padding: 20px;
      background-color: #fff;
      border-top: 1px solid #ddd;
    }

    .input-field {
      flex: 1;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin-right: 10px;
    }

    .send-button {
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  </style>

  <div class="chat-container">
    <div class="chat-window">
      {#each responses as response}
        <div class="message {response.type}-message">
          {response.text}
        </div>
      {/each}
    </div>
    <div class="input-container">
      <input
        class="input-field"
        bind:value={userInput}
        placeholder="Type your message here..."
        on:keydown={(e) => e.key === 'Enter' && sendMessage()}
      />
      <button class="send-button" on:click={sendMessage}>Send</button>
    </div>
  </div>
</main>
