<template>
    <header class="header">
        <div class="header-content">
            <router-link class="logo" to="/">
                <Icon size="40px" name="custom-icon:magify-dark" />
                <span>MAGIFY</span>
            </router-link>

            <nav class="nav-links">
                <template v-for="link in links">
                    <!-- Home -->
                    <NuxtLink exact :key="link.title" v-if="link.type === 'route'" :to="link.href" active-class="active"
                        class="nav-item">
                        <Icon name="custom-icon:star" class="icon" />
                        {{ link.title }}
                    </NuxtLink>
                    <!-- External Link -->
                    <a :key="link.title" v-if="link.type === 'external'" :href="link.href" target="_blank"
                        class="nav-item">
                        <Icon name="custom-icon:star" class="icon" />
                        {{ link.title }}
                    </a>
                    <!-- Popover -->
                    <Popover :key="link.title" v-if="link.type === 'popover'">
                        <template #trigger>
                            <div class="nav-item"
                                :class="{ active: ~(popoverData[link.title] as any[]).findIndex(item => item._path === route.path) }">
                                <Icon name="custom-icon:star" class="icon" />
                                {{ link.title }}
                            </div>
                        </template>

                        <template #content>
                            <div class="grid">
                                <NuxtLink v-for="popoverItem in popoverData[link.title]" :key="popoverItem._path"
                                    :to="popoverItem._path" class="grid-item">
                                    <div class="grid-item-icon">
                                        <img :src="popoverItem.image?.src" :alt="popoverItem.title" />
                                    </div>
                                    <p class="popover-item-name">{{ popoverItem.title }}</p>
                                </NuxtLink>
                            </div>
                        </template>
                    </Popover>
                </template>
            </nav>
            <div class="actions">
                <button class="btn btn-outline">Sign up</button>
                <button class="btn btn-primary">Book a demo</button>
            </div>
        </div>


    </header>
</template>

<script setup lang="ts">
import Popover from "~/components/content/Popover.vue";
import { links } from "~/composables/useNavigation";

const popoverData = ref<Record<string, any>>({});

const route = useRoute();

links.value
    .filter(link => link.type === "popover" && link.fetchPath)
    .forEach(link => {
        const { data: popoverItems } = useAsyncData(link.title, () =>
            queryContent(link.fetchPath ?? '').where({ _extension: "md" }).find()
        );
        popoverData.value[link.title] = popoverItems;
    });
</script>

<style scoped lang="scss">
@mixin transition($properties...) {
    transition: $properties $transition-duration ease;
}

.header {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: $bg-color;
    min-height: 96px;

    &-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: $maxContentWidth;
        width: 100%;
        color: #fff;
    }
}

// Logo
.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: bold;
    font-size: 24px;
    color: #cccccc;
    text-decoration: none;

    img {
        width: 24px;
        height: 24px;
    }
}

// Navigation
.nav-links {
    display: flex;
    gap: 10px;

    .nav-item {
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 8px 10px;
        border-radius: 999px;
        color: #ccc;
        text-decoration: none;
        cursor: pointer;
        border: 1px solid transparent;
        @include transition(color, border-color);

        &:hover,
        &.active {
            color: $link-hover-color;
            font-weight: bold;
            border-color: $link-border-color;

            .icon {
                color: $link-hover-color;
            }
        }

        .icon {
            color: $bg-color;
            @include transition(color);
        }
    }
}

// Actions
.actions {
    display: flex;
    gap: 10px;

    .btn {
        padding: 8px 16px;
        font-size: 14px;
        border-radius: 999px;
        cursor: pointer;
        border: none;

        &-outline {
            background: transparent;
            border: 2px solid #7b4ef1;
            color: #fff;
            @include transition(color);

            &:hover {
                color: $link-hover-color;
            }
        }

        &-primary {
            background: $btn-primary-bg;
            box-shadow: $btn-shadow;
            color: #fff;
        }
    }
}

// Popover
.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0px 15px;

    .grid-item {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 5px 10px;
        border-radius: 8px;
        text-decoration: none;
        color: #000000;
        @include transition(color);

        &:hover {
            color: #a9a9ff;
        }

        &-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 32px;
            min-height: 32px;
            border-radius: 5px;
            background: linear-gradient(180deg, #33AAFF 0%, #4072FF 81.32%, #2819AC 128.06%);
            box-shadow: 0 0 24px rgba(89, 29, 221, 0.35);

            img {
                width: 22px;
                height: 22px;
            }
        }
    }

    .popover-item-name {
        font-size: 15px;
        line-height: 18px;
        font-weight: 400;
        text-align: left;
    }
}
</style>
