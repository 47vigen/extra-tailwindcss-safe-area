const test = require("ava");
const postcss = require("postcss");
const tailwindcss = require("tailwindcss");
const safeArea = require("../index");

async function generateCSS(config) {
	const result = await postcss(tailwindcss(config)).process(
		"@tailwind utilities",
		{ from: undefined },
	);
	return result.css;
}

test("generates all utilities", async (t) => {
	const config = {
		content: [{ raw: "" }],
		safelist: [{ pattern: /.*safe.*$/ }],
		theme: {
			spacing: {
				1: "8px",
			},
			extend: {},
		},
		plugins: [safeArea],
	};

	const css = await generateCSS(config);
	console.log("🚀 ~ test ~ css:", css)

	t.snapshot(css);
});

test("generates base spacing safe-area utilities", async (t) => {
	const config = {
		content: [
			{
				raw: "m-safe mx-safe my-safe mt-safe mr-safe mb-safe ml-safe p-safe px-safe py-safe pt-safe pr-safe pb-safe pl-safe",
			},
		],
		theme: {
			extend: {},
		},
		plugins: [safeArea],
	};

	const css = await generateCSS(config);

	t.true(css.includes(".m-safe"));
	t.true(css.includes(".mx-safe"));
	t.true(css.includes(".my-safe"));
	t.true(css.includes(".mt-safe"));
	t.true(css.includes(".mr-safe"));
	t.true(css.includes(".mb-safe"));
	t.true(css.includes(".ml-safe"));
	t.true(css.includes(".p-safe"));
	t.true(css.includes(".px-safe"));
	t.true(css.includes(".py-safe"));
	t.true(css.includes(".pt-safe"));
	t.true(css.includes(".pr-safe"));
	t.true(css.includes(".pb-safe"));
	t.true(css.includes(".pl-safe"));
});

test("generates offset spacing safe-area utilities", async (t) => {
	const config = {
		content: [
			{
				raw: "h-safe-top-offset-1 h-safe-bottom-offset-1 w-safe-left-offset-1 w-safe-right-offset-1 m-safe-offset-1 mx-safe-offset-1 my-safe-offset-1 ms-safe-offset-1 me-safe-offset-1 mt-safe-offset-1 mr-safe-offset-1 mb-safe-offset-1 ml-safe-offset-1 p-safe-offset-1 px-safe-offset-1 py-safe-offset-1 ps-safe-offset-1 pe-safe-offset-1 pt-safe-offset-1 pr-safe-offset-1 pb-safe-offset-1 pl-safe-offset-1",
			},
		],
		theme: {
			extend: {},
		},
		plugins: [safeArea],
	};

	const css = await generateCSS(config);

	t.true(css.includes(".h-safe-top-offset-1"));
	t.true(css.includes(".h-safe-bottom-offset-1"));
	t.true(css.includes(".w-safe-left-offset-1"));
	t.true(css.includes(".w-safe-right-offset-1"));

	t.true(css.includes(".m-safe-offset-1"));
	t.true(css.includes(".mx-safe-offset-1"));
	t.true(css.includes(".my-safe-offset-1"));
	t.true(css.includes(".ms-safe-offset-1"));
	t.true(css.includes(".me-safe-offset-1"));
	t.true(css.includes(".mt-safe-offset-1"));
	t.true(css.includes(".mr-safe-offset-1"));
	t.true(css.includes(".mb-safe-offset-1"));
	t.true(css.includes(".ml-safe-offset-1"));
	t.true(css.includes(".p-safe-offset-1"));
	t.true(css.includes(".px-safe-offset-1"));
	t.true(css.includes(".py-safe-offset-1"));
	t.true(css.includes(".ps-safe-offset-1"));
	t.true(css.includes(".pe-safe-offset-1"));
	t.true(css.includes(".pt-safe-offset-1"));
	t.true(css.includes(".pr-safe-offset-1"));
	t.true(css.includes(".pb-safe-offset-1"));
	t.true(css.includes(".pl-safe-offset-1"));
});

test("generates min spacing safe-area utilities", async (t) => {
	const config = {
		content: [
			{
				raw: "h-safe-top-min-1 h-safe-bottom-min-1 w-safe-left-min-1 w-safe-right-min-1 m-safe-min-1 mx-safe-min-1 my-safe-min-1 ms-safe-min-1 me-safe-min-1 mt-safe-min-1 mr-safe-min-1 mb-safe-min-1 ml-safe-min-1 p-safe-min-1 px-safe-min-1 py-safe-min-1 ps-safe-min-1 pe-safe-min-1 pt-safe-min-1 pr-safe-min-1 pb-safe-min-1 pl-safe-min-1",
			},
		],
		theme: {
			extend: {},
		},
		plugins: [safeArea],
	};

	const css = await generateCSS(config);

	t.true(css.includes(".h-safe-top-min-1"));
	t.true(css.includes(".h-safe-bottom-min-1"));
	t.true(css.includes(".w-safe-left-min-1"));
	t.true(css.includes(".w-safe-right-min-1"));

	t.true(css.includes(".m-safe-min-1"));
	t.true(css.includes(".mx-safe-min-1"));
	t.true(css.includes(".my-safe-min-1"));
	t.true(css.includes(".ms-safe-min-1"));
	t.true(css.includes(".me-safe-min-1"));
	t.true(css.includes(".mt-safe-min-1"));
	t.true(css.includes(".mr-safe-min-1"));
	t.true(css.includes(".mb-safe-min-1"));
	t.true(css.includes(".ml-safe-min-1"));
	t.true(css.includes(".p-safe-min-1"));
	t.true(css.includes(".px-safe-min-1"));
	t.true(css.includes(".py-safe-min-1"));
	t.true(css.includes(".ps-safe-min-1"));
	t.true(css.includes(".pe-safe-min-1"));
	t.true(css.includes(".pt-safe-min-1"));
	t.true(css.includes(".pr-safe-min-1"));
	t.true(css.includes(".pb-safe-min-1"));
	t.true(css.includes(".pl-safe-min-1"));
});

test("generates max spacing safe-area utilities", async (t) => {
	const config = {
		content: [
			{
				raw: "h-safe-top-max-1 h-safe-bottom-max-1 w-safe-left-max-1 w-safe-right-max-1 m-safe-max-1 mx-safe-max-1 my-safe-max-1 ms-safe-max-1 me-safe-max-1 mt-safe-max-1 mr-safe-max-1 mb-safe-max-1 ml-safe-max-1 p-safe-max-1 px-safe-max-1 py-safe-max-1 ps-safe-max-1 pe-safe-max-1 pt-safe-max-1 pr-safe-max-1 pb-safe-max-1 pl-safe-max-1",
			},
		],
		theme: {
			extend: {},
		},
		plugins: [safeArea],
	};

	const css = await generateCSS(config);

	t.true(css.includes(".h-safe-top-max-1"));
	t.true(css.includes(".h-safe-bottom-max-1"));
	t.true(css.includes(".w-safe-left-max-1"));
	t.true(css.includes(".w-safe-right-max-1"));

	t.true(css.includes(".m-safe-max-1"));
	t.true(css.includes(".mx-safe-max-1"));
	t.true(css.includes(".my-safe-max-1"));
	t.true(css.includes(".ms-safe-max-1"));
	t.true(css.includes(".me-safe-max-1"));
	t.true(css.includes(".mt-safe-max-1"));
	t.true(css.includes(".mr-safe-max-1"));
	t.true(css.includes(".mb-safe-max-1"));
	t.true(css.includes(".ml-safe-max-1"));
	t.true(css.includes(".p-safe-max-1"));
	t.true(css.includes(".px-safe-max-1"));
	t.true(css.includes(".py-safe-max-1"));
	t.true(css.includes(".ps-safe-max-1"));
	t.true(css.includes(".pe-safe-max-1"));
	t.true(css.includes(".pt-safe-max-1"));
	t.true(css.includes(".pr-safe-max-1"));
	t.true(css.includes(".pb-safe-max-1"));
	t.true(css.includes(".pl-safe-max-1"));
});

test("generates scroll spacing safe-area utilities", async (t) => {
	const config = {
		content: [
			{
				raw: "scroll-m-safe scroll-mx-safe scroll-my-safe scroll-ms-safe scroll-me-safe scroll-mt-safe scroll-mr-safe scroll-mb-safe scroll-ml-safe scroll-p-safe scroll-px-safe scroll-py-safe scroll-ps-safe scroll-pe-safe scroll-pt-safe scroll-pr-safe scroll-pb-safe scroll-pl-safe",
			},
		],
		theme: {
			extend: {},
		},
		plugins: [safeArea],
	};

	const css = await generateCSS(config);

	t.true(css.includes(".scroll-m-safe"));
	t.true(css.includes(".scroll-mx-safe"));
	t.true(css.includes(".scroll-my-safe"));
	t.true(css.includes(".scroll-ms-safe"));
	t.true(css.includes(".scroll-me-safe"));
	t.true(css.includes(".scroll-mt-safe"));
	t.true(css.includes(".scroll-mr-safe"));
	t.true(css.includes(".scroll-mb-safe"));
	t.true(css.includes(".scroll-ml-safe"));
	t.true(css.includes(".scroll-p-safe"));
	t.true(css.includes(".scroll-px-safe"));
	t.true(css.includes(".scroll-py-safe"));
	t.true(css.includes(".scroll-ps-safe"));
	t.true(css.includes(".scroll-pe-safe"));
	t.true(css.includes(".scroll-pt-safe"));
	t.true(css.includes(".scroll-pr-safe"));
	t.true(css.includes(".scroll-pb-safe"));
	t.true(css.includes(".scroll-pl-safe"));
});

test("generates height safe-area utilities", async (t) => {
	const config = {
		content: [
			{
				raw: "min-h-screen-safe max-h-screen-safe h-screen-safe h-safe-top h-safe-bottom",
			},
		],
		theme: {
			extend: {},
		},
		plugins: [safeArea],
	};

	const css = await generateCSS(config);

	t.true(css.includes(".min-h-screen-safe"));
	t.true(css.includes(".max-h-screen-safe"));
	t.true(css.includes(".h-screen-safe"));
	t.true(css.includes(".h-safe-top"));
	t.true(css.includes(".h-safe-bottom"));
});

test("generates width safe-area utilities", async (t) => {
	const config = {
		content: [
			{
				raw: "min-w-screen-safe max-w-screen-safe w-screen-safe w-safe-left w-safe-right",
			},
		],
		theme: {
			extend: {},
		},
		plugins: [safeArea],
	};

	const css = await generateCSS(config);

	t.true(css.includes(".min-w-screen-safe"));
	t.true(css.includes(".max-w-screen-safe"));
	t.true(css.includes(".w-screen-safe"));
	t.true(css.includes(".w-safe-left"));
	t.true(css.includes(".w-safe-right"));
});

test("generates position safe-area utilities", async (t) => {
	const config = {
		content: [
			{
				raw: "inset-safe inset-x-safe inset-y-safe start-safe end-safe top-safe right-safe bottom-safe left-safe",
			},
		],
		theme: {
			extend: {},
		},
		plugins: [safeArea],
	};

	const css = await generateCSS(config);

	t.true(css.includes(".inset-safe"));
	t.true(css.includes(".inset-x-safe"));
	t.true(css.includes(".inset-y-safe"));
	t.true(css.includes(".start-safe"));
	t.true(css.includes(".end-safe"));
	t.true(css.includes(".top-safe"));
	t.true(css.includes(".right-safe"));
	t.true(css.includes(".bottom-safe"));
	t.true(css.includes(".left-safe"));
});
