

<script>

    // Award rubrics
    let rubrics = { 
      "Originality": 10,
      "Technical Content": 15,
      "Dummy Parameter 1": 20,
      "Dummy Parameter 2": 25,
      "Dummy Parameter 3": 20
    };

    // Get rubrics from server
    function getRubrics() {
        // ToDo
    }
  
    // Stores user-entered scores
    let scores = {};
  
    // Modifying scores
    function handleScoreChange(metric, score) {
      scores[metric] = score;
    }
  
    // Submit scores to server
    function handleSubmit() {
      // ToDo
    }

  </script>

  
  
   <div class="mb-6 text-3xl font-semibold text-center text-gray-700">
    Assign Scores
  </div>

   <div class="p-4 text-lg">
    <form on:submit={handleSubmit}>
      <div class="rounded bg-gray-100 p-4 max-w-md mx-auto">
        {#each Object.keys(rubrics) as metric}
          <div class="mb-4 flex justify-between items-center">
            <label for={metric} class="text-left">
              {metric}
            </label>
            <div class="text-right">
              <input
                type="number"
                class="w-16 p-2 border rounded text-blue-500"
                min="0"
                max={rubrics[metric]}
                bind:value={scores[metric]}
                on:input={() => handleScoreChange(metric, scores[metric])}
              />
              <span class="ml-2 text-gray-500">/ {rubrics[metric]}</span>
            </div>
          </div>
        {/each}
  
        <div class="flex justify-center">
          <button
            type="submit"
            class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>