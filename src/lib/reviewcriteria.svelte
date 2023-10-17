<script>
  import { Input, Label } from "flowbite-svelte";

  //  variable to store the data passed default values for testing
  let metrics = [{ name: "Originality", maxScore: 10 }];

  // Variables to store the metric name and maximum score
  let metricName = "";
  let maxScore = "";

  function addMetric() {
    // Validate input before adding
    const nameRegex = /^[A-Za-z\s]+$/; //allow only letters and spaces in the name
    const scoreValue = parseInt(maxScore, 10); // the score as an integer

    // check if the num is integer and the text is valid then
    if (
      metricName.match(nameRegex) &&
      !isNaN(scoreValue) &&
      scoreValue >= 0 &&
      scoreValue <= 10
    ) {
      // add toarray
      metrics = [...metrics, { name: metricName, maxScore: scoreValue }];
      // Clear the input values
      metricName = "";
      maxScore = "";
    }
  }
</script>

<!-- This div contains the main content and applies margin on all sides -->
<div class="container mx-auto p-4 m-5">
  <!-- This div contains the heading Review Criteria-->
  <div class="mb-7">
    <!-- This label styles the text and adds some spacing -->
    <Label class="font-extralight text-3xl mb-1">Review Criteria</Label>
    <!-- This span creates a blue border below the heading that is centered -->
    <span
      class="block w-32 mx-auto border-b-2 border-blue-500 border-opacity-50"
    />
  </div>

  <!-- This div creates a container with a shadow and border -->
  <div
    class="shadow border-dashed border-2 border-gray-400 p-4 mb-6 rounded-lg metric-container"
  >
    <!-- This checks if there are no metrics -->
    {#if metrics.length === 0}
      <!-- This div centers text and displays "No Review Added" when there are no metrics -->
      <div class="text-center">No Review Added</div>
    {:else}
      <!-- this div contain the labels of metrics -->
      <div class="metric-row flex items-center justify-center space-x-4">
        <!-- this is the label of the metrics nmae -->
        <div class="w-3/6 p-2 m-2 px-40">
          <span class="text-center font-semibold">Metrics</span>
        </div>
        <!-- this is the label of the metrics score-->
        <div class="w-3/6 p-2 m-2 px-40">
          <span class="text-center font-semibold">MaxScore</span>
        </div>
      </div>
      <!-- This loop iterates through each metric -->
      {#each metrics as metric}
        <!-- tis div contain metric which is displayed after addig -->
        <div class="metric-row flex items-center justify-center space-x-4">
          <!-- this is for the name of the metric -->
          <div class="w-3/6 border p-2 m-2 rounded-xl px-40">
            <span class="text-center">{metric.name}</span>
          </div>
          <!-- this is for the score of the metric -->
          <div class="w-3/6 border p-2 m-2 ml-3 rounded-xl px-40">
            <span class="text-center">{metric.maxScore}</span>
          </div>
        </div>
      {/each}
    {/if}
  </div>

  <!-- This div contains input fields for adding new metrics -->
  <div class="p-2 lg:p-4 mb-6 metric-container">
    <!-- This div defines a row for input fields with flex layout -->
    <div class="metric-row flex items-center justify-center space-x-4">
      <!-- This div contains an input for metric name -->
      <div class="">
        <Input
          type="text"
          id="metricName"
          class="w-64 lg:w-96 focus:border-black"
          bind:value={metricName}
          placeholder="Metric Name"
          style="text-align: center"
          required
          pattern="[A-Za-z\s]+"
        />
      </div>

      <!-- This div contains an input for metric score-->
      <div class="w-3/6">
        <Input
          type="number"
          id="maxScore"
          class="w-64 lg:w-96 focus:border-black"
          bind:value={maxScore}
          placeholder="Max Score: 10"
          style="appearance: none; text-align: center"
          required
          min="0"
          max="10"
        />
      </div>

      <!-- this is button to add the data -->
      <button
        class="add-button text-blue-800 hover:text-blue-600 text-right rounded"
        on:click={addMetric}
      >
        <i class="fas fa-plus-circle fa-2x" />
      </button>
    </div>
  </div>
</div>
