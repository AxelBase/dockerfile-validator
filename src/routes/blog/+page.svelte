<script>
    import { base } from '$app/paths';
</script>

<svelte:head>
    <meta name="robots" content="index, follow" />
    <meta name="description" content="Explore AxelBase blog posts on Dockerfile syntax validation, including best practices, common errors, and tool insights." />
    <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
    <title>AxelBase Blog - Dockerfile Validation Insights</title>
</svelte:head>

<div class="container py-5 main-content">
    <h1 class="display-4 text-center mb-5">AxelBase Blog</h1>
    <p class="lead text-secondary-text text-center mb-5">Dive into articles on Dockerfile syntax validation, best practices, and tool development.</p>

    <div class="row g-4">
        <div class="col-md-6">
            <div class="card bg-dark-surface border-custom h-100">
                <div class="card-body">
                    <h5 class="card-title">Broken Links Break Trust</h5>
                    <p class="card-text">Learn how invalid Docker configurations can undermine build reliability and trust.</p>
                    <a href="{base}/blog/posts/post1" class="btn btn-outline-primary">Read More</a>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card bg-dark-surface border-custom h-100">
                <div class="card-body">
                    <h5 class="card-title">Client-Side Validation</h5>
                    <p class="card-text">Discover how AxelBase validates Dockerfiles locally for privacy and performance.</p>
                    <a href="{base}/blog/posts/post2" class="btn btn-outline-primary">Read More</a>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card bg-dark-surface border-custom h-100">
                <div class="card-body">
                    <h5 class="card-title">Common Errors and Fixes</h5>
                    <p class="card-text">Tackle frequent Dockerfile issues with practical solutions.</p>
                    <a href="{base}/blog/posts/post3" class="btn btn-outline-primary">Read More</a>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card bg-dark-surface border-custom h-100">
                <div class="card-body">
                    <h5 class="card-title">Exporting Results (TXT/JSON)</h5>
                    <p class="card-text">Maximize workflow efficiency with exportable validation reports.</p>
                    <a href="{base}/blog/posts/post4" class="btn btn-outline-primary">Read More</a>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card bg-dark-surface border-custom h-100">
                <div class="card-body">
                    <h5 class="card-title">How Link Validation Works</h5>
                    <p class="card-text">Understand the real-time syntax checking process behind AxelBase.</p>
                    <a href="{base}/blog/posts/post5" class="btn btn-outline-primary">Read More</a>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card bg-dark-surface border-custom h-100">
                <div class="card-body">
                    <h5 class="card-title">Markdown vs. Online Validators</h5>
                    <p class="card-text">Compare AxelBase with traditional validation tools.</p>
                    <a href="{base}/blog/posts/post6" class="btn btn-outline-primary">Read More</a>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card bg-dark-surface border-custom h-100">
                <div class="card-body">
                    <h5 class="card-title">Optimizing Large Markdown</h5>
                    <p class="card-text">Tips for handling large Dockerfiles efficiently.</p>
                    <a href="{base}/blog/posts/post7" class="btn btn-outline-primary">Read More</a>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .card {
        transition: transform 0.2s ease-in-out;
    }
    .card:hover {
        transform: translateY(-5px);
    }
    .card-title {
        color: var(--primary-accent);
    }
    .card-text {
        color: var(--secondary-text);
    }
</style>