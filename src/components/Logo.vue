<template>
	<g-link class="logo" to="/">
	  <h2 class="logo__text">
	    <!-- &larr; {{ $static.metaData.siteName }} -->
		&larr; Back To Blog
	  </h2>
	</g-link>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style lang="scss">
.logo {
	text-decoration: none;
  color: var(--body-color)!important;
  	max-width: var(--content-width);
	margin: 0 auto;
	display: block;

	&__text {
		margin: 25px 0 -27px;
		font-size: calc(var(--base-font-size) * 1.25);
	}
  
	&__image {
		vertical-align: middle;
		border-radius: 99px;
		height: 40px;
		width: 40px;
		margin-right: .5em;
	}	
}
</style>