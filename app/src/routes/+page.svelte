<script lang="ts">
    import { enhance } from "$app/forms";

    export let form;
    let bloodGlucose: number;
    let trend: string
    let unit: string
    let status: string
    let success: boolean = false;

    const handleLogin = () => {
        success = form?.success ? form?.success : false;
    }

    const handleGlucoseReading = () => {
        if (!form?.mesurement) return
        bloodGlucose = form.mesurement?.value
        trend = form.trend
        unit = form.mesurement.unit
        status = form.status
    }
</script>

{#if !success}
    <div class="flex justify-center items-center h-screen">
        <div class="card w-96 bg-base-100 shadow-xl ">
            <div class="card-body">
                <form action="?/login" method="POST" use:enhance class="pt-1">
                    <div class="flex flex-col max-w-xs">
                        <label class="flex flex-col max-w-xs">
                            Email :
                            <input name="email" type="email" class="input input-bordered w-auto max-w-xs ">
                        </label>
                        <label class="flex flex-col max-w-xs">
                            Password :
                            <input name="password" type="password" class="input input-bordered w-auto max-w-xs">
                        </label>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary mt-2" on:click={handleLogin}>Log in</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
{:else}
    <div class="flex flex-col justify-center items-center h-screen">
        <div class="stats shadow">
            <div class="stat">
                {#if bloodGlucose}
                    <div class="stat-title">Bg {status}</div>
                    <div class="stat-value">{bloodGlucose} {unit} {trend}</div>
                    <div class="stat-desc">Hello there!</div>
                {:else}
                    <div class="stat-title">No data</div>
                    <div class="stat-value">No data</div>
                    <div class="stat-desc">No data</div>
                {/if}
            </div>
        </div>
        <form action="?/getBloodGlucoseReading" method="POST" use:enhance>
            <button on:click={handleGlucoseReading} class="btn btn-primary mt-2">Get Reading</button>
        </form>
    </div>
{/if}

