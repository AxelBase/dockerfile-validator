<script>
    import Editor from '$lib/components/Editor.svelte';
    import ResultsPanel from '$lib/components/ResultsPanel.svelte';
    import Toolbar from '$lib/components/Toolbar.svelte';
    import HelpModal from '$lib/components/HelpModal.svelte';
</script>

<svelte:head>
    <meta name="robots" content="index, follow" />
    <meta name="description" content="AxelBase is a real-time Dockerfile syntax validator. Learn about its features, how to use it, and get answers to FAQs." />
    <meta name="keywords" content="Dockerfile, syntax validator, AxelBase, real-time validation, Docker, development tools" />
    <meta name="author" content="AxelBase Team" />
    <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
    <title>AxelBase - Dockerfile Syntax Validator</title>
</svelte:head>

<div class="container-fluid vh-100 p-0">
    <div class="row h-100 g-0">
        <div class="col-md-6 h-100 d-flex flex-column bg-dark-surface border-end border-custom">
            <Toolbar />
            <div class="flex-grow-1 p-3">
                <Editor />
            </div>
        </div>

        <div class="col-md-6 h-100 p-3 overflow-auto">
            <ResultsPanel />
            <div class="mt-3 d-flex justify-content-end">
                <HelpModal />
            </div>
        </div>
    </div>
</div>

<div class="container py-5">
    <section id="about" class="py-5 text-center">
        <h2 class="display-5">About AxelBase</h2>
        <p class="lead text-secondary-text">
            Welcome to AxelBase, a cutting-edge tool designed to validate Dockerfile syntax with precision and ease. Our mission is to revolutionize your development workflow by delivering instant, accurate feedback on your Docker configurations, saving you time and reducing errors. Born from the need to address common pitfalls in Docker build processes, AxelBase leverages advanced client-side technology to empower developers worldwide. Whether you're a solo coder or part of a large team, our tool ensures your Dockerfiles are robust and error-free before they reach the build stage.
        </p>
        <p class="text-secondary-text">
            Founded with a passion for open-source development, AxelBase is built by a team of experienced developers who understand the frustrations of debugging failed builds. We prioritize privacy by performing all validation locally in your browser, using JavaScript to analyze your code without ever sending it to a server. This approach not only enhances security but also supports offline use, making it ideal for remote work environments. Our commitment to user experience is reflected in the intuitive interface and real-time feedback system, which highlights syntax errors and best practices in an accessible format.
        </p>
        <p class="text-secondary-text">
            AxelBase is more than just a validator; it’s a community-driven project aimed at fostering collaboration and knowledge sharing. With features like exportable validation reports in TXT and JSON formats, you can document your work and share insights with your team. As we continue to evolve, we invite feedback to shape future updates, ensuring AxelBase remains a vital tool for the Docker ecosystem. Join us in building reliable, efficient Docker images and experience the difference today.
        </p>
    </section>

    <hr class="border-custom my-4" />

    <section id="how-to-use" class="py-5 text-center">
        <h2 class="display-5">How to Use</h2>
        <p class="lead text-secondary-text">
            Getting started with AxelBase is straightforward, designed to integrate seamlessly into your development process. To begin, open the tool in your browser and locate the editor panel on the left side of the interface. Here, you can paste the content of your Dockerfile directly or upload a `.dockerfile` file using the provided toolbar options. Once your code is loaded, AxelBase’s real-time validation engine springs into action, analyzing each line for syntax errors, best practice warnings, and structural issues, with results displayed instantly in the results panel on the right.
        </p>
        <p class="text-secondary-text">
            The editor supports common Dockerfile commands like `FROM`, `RUN`, `COPY`, and `EXPOSE`, flagging issues such as missing base images or invalid arguments with clear, color-coded feedback—green for valid, red for errors. For a more detailed understanding, click the “Help” button to access a modal with a reference guide to Dockerfile instructions. If you encounter errors, the results panel provides specific line numbers and suggestions for fixes, such as correcting `FROM invalid` to `FROM node:18`. You can also export your validation results as TXT or JSON files via the toolbar, ideal for documentation or team reviews.
        </p>
        <p class="text-secondary-text">
            For optimal use, work incrementally—add a few lines, validate, and adjust as needed. This approach minimizes the risk of cascading errors in large Dockerfiles. If you’re new to Docker, start with a simple file and explore the tool’s features, like multi-line command validation or best practice alerts for inefficient `RUN` layers. Advanced users can leverage the export feature to integrate with CI/CD pipelines or share reports with stakeholders. Regularly saving your work and testing builds in a staging environment complements AxelBase’s capabilities, ensuring a smooth development experience.
        </p>
    </section>

    <hr class="border-custom my-4" />

    <section id="faq" class="py-5">
        <h2 class="display-5 text-center mb-5">Frequently Asked Questions</h2>
        <div class="accordion" id="faqAccordion">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                    >
                        What is this tool for?
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        AxelBase is a real-time syntax validator designed to check Dockerfiles for errors and best practices before you run `docker build`. It helps catch issues like missing images, invalid commands, or inefficient layers, saving you time and preventing build failures. Whether you’re a beginner learning Docker or an expert optimizing large files, AxelBase provides instant feedback to streamline your workflow. The tool is particularly useful for ensuring consistency across team projects and avoiding costly mistakes in production environments.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                    >
                        Is my data saved on your servers?
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        No, your data is not saved on our servers. AxelBase performs all validation client-side within your browser using JavaScript, meaning your Dockerfile content never leaves your device. This privacy-first design ensures your code remains secure, even on public networks. The tool uses local storage only for temporary session data, which is cleared when you close the browser unless you explicitly save exports. This approach supports offline use and aligns with our commitment to user trust and data sovereignty.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                    >
                        Can I use AxelBase offline?
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        Yes, AxelBase is fully functional offline. Since all validation occurs client-side, you can use it without an internet connection, making it perfect for remote work or areas with unreliable networks. Simply load the tool in your browser, and it will work as expected. However, note that initial access to the web app requires an online connection to load the interface. Once loaded, you can continue using it offline, with all features like real-time validation and exports available, enhancing flexibility for developers on the go.
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

<style>
    /* Make the accordion fit the dark theme */
    .accordion-item {
        background-color: var(--dark-surface);
        border: 1px solid var(--border-color);
    }
    .accordion-button {
        background-color: var(--dark-surface-2);
        color: var(--primary-text);
        font-weight: 600;
    }
    .accordion-button:not(.collapsed) {
        background-color: var(--primary-accent);
        color: var(--dark-bg);
    }
    .accordion-button:focus {
        box-shadow: 0 0 0 0.25rem rgba(0, 191, 255, 0.25);
    }
    .accordion-button::after {
        filter: invert(1) grayscale(100%) brightness(200%);
    }
</style>