<script lang="ts">
    import { enhance } from "$app/forms";

    export let form;
    let bloodGlucoseValue: number;

    const handleGlucoseReading = async () => {
        bloodGlucoseValue = Number(form?.mesurement?.value)
    }
</script>

<form action="?/login" method="POST" use:enhance>
	<label>
		Email
		<input name="email" type="email">
	</label>
	<label>
		Password
		<input name="password" type="password">
	</label>
	<button>Log in</button>
</form>

{#if bloodGlucoseValue}
    <p>Your bg is at {bloodGlucoseValue} mg/dl.</p>
{:else}
    <p>No bg readings yet.</p>
{/if}

<form action="?/getBloodGlucoseReading" method="POST" use:enhance>
	<button on:click={handleGlucoseReading}>Get Reading</button>
</form>