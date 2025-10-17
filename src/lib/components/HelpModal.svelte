<script>
    import { HelpCircle } from 'lucide-svelte';
    let showModal = false;

    const instructions = [
        { name: 'FROM', desc: 'Set base image', example: 'FROM node:18' },
        { name: 'RUN', desc: 'Execute command', example: 'RUN npm install' },
        { name: 'COPY', desc: 'Copy files', example: 'COPY . /app' },
        { name: 'WORKDIR', desc: 'Set working directory', example: 'WORKDIR /app' },
        { name: 'EXPOSE', desc: 'Expose port', example: 'EXPOSE 3000' },
        { name: 'CMD', desc: 'Default command', example: 'CMD ["npm", "start"]' },
        { name: 'LABEL', desc: 'Metadata', example: 'LABEL version="1.0"' },
        { name: 'ENV', desc: 'Environment variables', example: 'ENV NODE_ENV=production' },
        { name: 'ADD', desc: 'Copy + extract', example: 'ADD archive.tar.gz /app' },
        { name: 'ENTRYPOINT', desc: 'Default executable', example: 'ENTRYPOINT ["node"]' },
        { name: 'VOLUME', desc: 'Create volume', example: 'VOLUME /data' },
        { name: 'USER', desc: 'Set user', example: 'USER node' },
        { name: 'ARG', desc: 'Build argument', example: 'ARG VERSION=1.0' }
    ];
</script>

<button
    class="btn btn-outline-info btn-sm"
    on:click={() => (showModal = true)}
    title="Dockerfile Reference"
    aria-label="Open Dockerfile Help"
>
    <HelpCircle size={16} /> Help
</button>

{#if showModal}
    <dialog
        class="modal fade show d-block"
        style="background: rgba(0,0,0,0.7); border: none;"
        open
        on:close={() => (showModal = false)}
        on:keydown={(e) => {
            if (e.key === 'Escape') showModal = false;
        }}
    >
        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Dockerfile Instructions Reference</h5>
                    <button
                        type="button"
                        class="btn-close"
                        aria-label="Close"
                        on:click={() => (showModal = false)}
                        on:keydown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') showModal = false;
                        }}
                    ></button>
                </div>
                <div class="modal-body">
                    <div class="table-responsive">
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Instruction</th>
                                    <th>Description</th>
                                    <th>Example</th>
                                </tr>
                            </thead>
                            <tbody>
                                {#each instructions as instruction}
                                    <tr>
                                        <td><code>{instruction.name}</code></td>
                                        <td>{instruction.desc}</td>
                                        <td><code>{instruction.example}</code></td>
                                    </tr>
                                {/each}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="modal-footer">
                    <small class="text-muted">
                        Source:
                        <a href="https://docs.docker.com/reference/dockerfile/" target="_blank"
                            >Official Docker Docs</a
                        >
                    </small>
                </div>
            </div>
        </div>
    </dialog>
{/if}