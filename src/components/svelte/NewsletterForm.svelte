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

<div class="flex flex-col md:flex-row gap-4 animate">
  {#if success}
    <div class="text-xl text-center p-4 bg-primary card w-full shadow-md">
      <h2>
        Thank you for joining <strong>"The Anvil"</strong>! <br /> You are on the
        right path to becoming a digital blacksmith!
      </h2>
    </div>
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
      <button class="btn btn-primary shadow-md w-full" on:click={handleClick}
        >Join the anvil</button
      >
    </div>
  {/if}
</div>
