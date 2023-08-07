<script lang="ts">
  let success = false;
  let name: string;
  let email: string;
  let error: string | null;

  // Digital Blacksmith group
  const groups = ['94229391884682951'];

  const handleClick = async () => {
    const request = await fetch('/api/newsletter', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, fields: { name }, groups }),
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

<div class="flex flex-col gap-6 max-w-2xl mx-auto">
  {#if success}
    <div class="text-xl text-center p-4 bg-primary card w-full shadow-md">
      <h2>
        Thank you for joining <strong>"The Anvil"</strong>! <br /> You are on
        the right path to becoming a <strong>Digital Blacksmith</strong>!
      </h2>
    </div>
  {:else}
    <div class="gap-2 flex-1 form-control w-full">
      <div>
        <div class="label">
          <span class="label-text font-bold">First Name</span>
        </div>
        <input
          bind:value={name}
          type="text"
          placeholder="Enter Your First Name"
          class="input input-primary w-full"
        />
      </div>
      <div>
        <div class="label">
          <span class="label-text font-bold">Email Address</span>
        </div>
        <input
          bind:value={email}
          type="text"
          placeholder="Enter Your Email Address"
          class="input input-primary w-full"
        />
      </div>
      {#if error}
        <div class="label">
          <span class="label-text font-bold text-red-500">{error}</span>
        </div>
      {/if}
    </div>
    <div>
      <button class="btn border-none bg-gradient-to-r from-primary to-secondary shadow-md w-full" on:click={handleClick}
        >Join "the anvil"</button
      >
    </div>
  {/if}
</div>
