<script lang="ts">
  let input: string;

  const handleClick = () => {
    console.log(input);
  };
</script>

<div class="flex gap-4 animate">
  <div class="flex-1 form-control w-full">
    <input
      bind:value={input}
      type="text" 
      placeholder="Enter Your Email Address"
      class="input input-primary w-full"
    />
    <!-- <label class="label">
      <span class="label-text text-red-500">Bottom Left label</span>
    </label> -->
  </div>
  <div>
    <button class="btn btn-primary" on:click={handleClick}
      >Join the readership</button
    >
  </div>
</div>
