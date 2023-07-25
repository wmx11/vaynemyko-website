<script lang="ts">
  let success = false;
  let input: string;
  let error: string | null;

  const handleClick = async () => {
    const request = await fetch('/api/newsletter', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: input }),
    });

    const data = await request.json();

    if (!data.ok) {
      error = data?.message;
      success = false;
      return;
    }

    success = true;
    error = null;
  };
</script>

<div class="flex gap-4 animate">
  {#if success}
    <h2 class="text-2xl text-center p-4 bg-primary rounded-md w-full shadow-md">
      Thank you for joining "The Anvil"! <br /> You are on the right path to becoming
      a digital blacksmith!
    </h2>
  {:else}
    <div class="flex-1 form-control w-full">
      <input
        bind:value={input}
        type="text"
        placeholder="Enter Your Email Address"
        class="input input-primary w-full"
      />
      {#if error}
        <div class="label">
          <span class="label-text font-bold text-red-500">{error}</span>
        </div>
      {/if}
    </div>
    <div>
      <button class="btn btn-primary shadow-md" on:click={handleClick}
        >Join the anvil</button
      >
    </div>
  {/if}
</div>
