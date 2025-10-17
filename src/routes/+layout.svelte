<script lang="ts">
	import { base } from '$app/paths';
	import { fly } from 'svelte/transition';
	import '../app.css'; // <-- FIX: Import global CSS here

	let { children } = $props();

	// --- CONFIGURATION ---
	const paypalUsername = 'AxelLab427'; // <-- IMPORTANT: Replace with your PayPal username
	const donationAmounts = [1, 3, 5, 10];
	// ---------------------

	let isDropdownOpen = $state(false); // <-- FIX: Use $state for reactive variables

	function toggleDropdown() {
		isDropdownOpen = !isDropdownOpen;
	}
	function closeDropdown() {
		isDropdownOpen = false;
	}

	function clickOutside(node: HTMLElement) {
		const handleClick = (event: MouseEvent) => {
			if (node && !node.contains(event.target as Node)) {
				// Use a custom event dispatch for Svelte 5 compatibility
				node.dispatchEvent(new CustomEvent('click_outside'));
			}
		};
		document.addEventListener('click', handleClick, true);
		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	}

	const currentYear = new Date().getFullYear();
</script>

<div class="app-container">
	<!-- HEADER / NAVBAR -->
	<header class="app-header">
		<div class="navbar-content">
			<!-- Left Side: Brand and BMAC -->
			<div class="brand-container">
				<a href="{base}/" aria-label="Home">
					<img src="{base}/AxelLab-Logo.ico" alt="AxelBase Logo" class="brand-logo" />
				</a>
				<a class="brand-name" href="{base}/">AxelBase</a>

				<!-- Buy Me a Coffee Button -->
				<div class="bmac-container" use:clickOutside onclick_outside={closeDropdown}>
					<!-- FIX: on:click_outside -> onclick_outside -->
					<button class="bmac-button" onclick={toggleDropdown}>
						<!-- FIX: on:click -> onclick -->
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
							<path
								d="M12.35,22.2L12,22A10,10,0,0,1,2,12V10A2,2,0,0,1,4,8H7.2A5.13,5.13,0,0,1,12,3A5.13,5.13,0,0,1,16.8,8H20A2,2,0,0,1,22,10V12A10,10,0,0,1,12.35,22.2M4,10V12A8,8,0,0,0,12,20A8,8,0,0,0,20,12V10H16.8A5.11,5.11,0,0,1,12.5,5.12A5.15,5.15,0,0,1,7.2,10H4Z"
							/>
						</svg>
						Buy me a coffee
					</button>

					{#if isDropdownOpen}
						<div class="bmac-dropdown" transition:fly={{ y: -10, duration: 250 }}>
							{#each donationAmounts as amount}
								<a
									href="https://paypal.me/{paypalUsername}/{amount}"
									target="_blank"
									rel="noopener noreferrer"
									onclick={closeDropdown}
								>
									<!-- FIX: on:click -> onclick -->
									${amount}
								</a>
							{/each}
						</div>
					{/if}
				</div>
			</div>

			<!-- Right Side: Navigation Links -->
			<nav>
				<ul class="nav-links">
					<li><a class="nav-link" href="{base}/">Home</a></li>
					<li><a class="nav-link" href="{base}/#about">About</a></li>
					<li><a class="nav-link" href="{base}/#how-to-use">How to use</a></li>
					<li><a class="nav-link" href="{base}/#faq">FAQ</a></li>
					<li><a class="nav-link" href="{base}/blog">Blog</a></li>
				</ul>
			</nav>
		</div>
	</header>

	<!-- PAGE CONTENT -->
	<main class="main-content">
		{@render children?.()}
	</main>

	<!-- FOOTER -->
	<footer class="app-footer">
		<div class="footer-content">
			<span>&copy; {currentYear} AxelBase Dockerfile Syntax Validator</span>
			<div>
				<a href="{base}/privacy">Privacy Policy</a>
				<a href="{base}/terms">Terms & Conditions</a>
			</div>
		</div>
	</footer>
</div>