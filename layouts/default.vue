<template>
<div style="overflow: hidden;">
    <div class="principal d-flex">
        <div class="PSide">
            <SideMenu />
        </div>
        <div class="PContainer">
            <NuxtPage />
        </div>
    </div>
</div>
</template>

<style>
.principal {
    display: grid;
    grid-template-columns: .3fr .7fr;
    min-height: 700px;
    height: 100vh;
    overflow: hidden;
}



.PSide {
    width: 350px;
}

.PContainer {
    width: 100%;
    overflow-y: scroll;
}

a {
    text-decoration: none;
}

@media (max-width: 1050px) {
    .principal {
        grid-template-columns: 1fr;
    }

    .PSide {
        width: 0;
    }
}
</style>
