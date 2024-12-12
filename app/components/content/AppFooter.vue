<template>
    <footer class="footer" :class="theme">
        <div class="footer-content">
            <div class="footer-top">
                <div class="logo-and-description">
                    <div class="logo">
                        <Icon :name="`custom-icon:magify-${theme}`" />
                        <span>MAGNIFY</span>
                    </div>
                    <p class="description">
                        Contact us today to discuss your project and discover how we can bring your vision to life.
                    </p>
                </div>
                <nav class="footer-links">
                    <NuxtLink href="/" class="footer-link">Home</NuxtLink>
                    <a href="#" class="footer-link">Solutions</a>
                    <NuxtLink href="/blog" class="footer-link">Blog</NuxtLink>
                    <NuxtLink href="/about" class="footer-link">Contact</NuxtLink>
                </nav>
            </div>
            <div class="footer-bottom">
                <div class="social-icons">
                    <a href="#" target="_blank" class="social-icon">
                        <Icon name="fa6-brands:facebook" />
                    </a>
                    <a href="#" target="_blank" class="social-icon">
                        <Icon name="fa6-brands:x-twitter" />
                    </a>
                    <a href="#" target="_blank" class="social-icon">
                        <Icon name="fa6-brands:linkedin" />
                    </a>
                    <a href="#" target="_blank" class="social-icon">
                        <Icon name="fa6-brands:github" />
                    </a>
                    <a href="#" target="_blank" class="social-icon">
                        <Icon name="fa6-brands:discord" />
                    </a>
                    <a href="#" target="_blank" class="social-icon">
                        <Icon name="fa6-brands:youtube" />
                    </a>
                    <div class="rights">All rights reserved</div>
                    <div class="legal-links">
                        <a href="#" class="legal-link">Terms of use</a>
                        <a href="#" class="legal-link">Privacy policy</a>
                    </div>
                </div>
                <div class="platform-icons">
                    <a href="#" class="platform-icon">
                        <Icon name="fa6-brands:apple" />
                    </a>
                    <a href="#" class="platform-icon">
                        <Icon name="fa6-brands:android" />
                    </a>
                    <a href="#" class="platform-icon">
                        <Icon name="cib:unity" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
defineProps({
    theme: String,
});
</script>

<style scoped lang="scss">
.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: $footer-desktop-minheight;
    background: linear-gradient(to top, #ffffff, #430c8a);
    color: white;

    &.light {
        background: transparent;
        color: #421496;

        .footer-link, .footer-link:hover {
            color: #181853;
        }

        .description,
        .social-icon,
        .legal-link:hover,
        .rights,
        .legal-link,
        .legal-link:hover,
        .platform-icon,
        .platform-icon:hover {
            color: #0A0119;
        }
    }
}

.footer-content {
    width: 100%;
    padding: 20px 20px;
    max-width: $maxContentWidth;
}

.footer-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
}

.logo-and-description {
    max-width: 400px;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 18px;
    font-weight: bold;
}

.description {
    margin-top: 20px;
    font-size: 14px;
    line-height: 1.5;
    color: white;
}

.footer-links {
    display: flex;
    gap: 20px;
}

.footer-link {
    text-decoration: none;
    color: white;
    font-size: 14px;
}

.footer-link:hover {
    color: white;
    text-decoration: underline;
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.social-icons {
    display: flex;
    gap: 15px;
}

.social-icon {
    color: white;
    font-size: 18px;
}

.social-icon:hover {
    color: white;
}

.rights {
    font-size: 14px;
    color: white;
}

.legal-links {
    display: flex;
    gap: 15px;
}

.legal-link {
    text-decoration: none;
    color: white;
    font-size: 14px;
}

.legal-link:hover {
    color: white;
    text-decoration: underline;
}

.platform-icons {
    display: flex;
    gap: 15px;
}

.platform-icon {
    color: white;
    font-size: 20px;
}

.platform-icon:hover {
    color: white;
}
</style>