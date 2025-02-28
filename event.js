
function EXSearch_Click() {
	let url = location.href;

	let rarity_cond = '';
	if (document.getElementById("rarity_m").checked) rarity_cond += 'rarity%5B%5D=4&';
	if (document.getElementById("rarity_r").checked) rarity_cond += 'rarity%5B%5D=3&';
	if (document.getElementById("rarity_u").checked) rarity_cond += 'rarity%5B%5D=2&';
	if (document.getElementById("rarity_c").checked) rarity_cond += 'rarity%5B%5D=1&';
	url = url.replace(/rarity%5B\d?%5D=\d(\&|$)/g, '');
	if (rarity_cond) url += '&' + rarity_cond.replace(/\&$/, '');

	let color_cond = '';
	if (document.getElementById("color_w").checked) color_cond += 'colors%5B%5D=1&';
	if (document.getElementById("color_u").checked) color_cond += 'colors%5B%5D=2&';
	if (document.getElementById("color_b").checked) color_cond += 'colors%5B%5D=3&';
	if (document.getElementById("color_r").checked) color_cond += 'colors%5B%5D=4&';
	if (document.getElementById("color_g").checked) color_cond += 'colors%5B%5D=5&';
	if (document.getElementById("color_c").checked) color_cond += 'colors%5B%5D=6&';
	url = url.replace(/colors%5B\d?%5D=\d(\&|$)/g, '');
	if (color_cond) url += '&' + color_cond.replace(/\&$/, '');

	let foil_cond = '';
	if (document.getElementById("frame_normal").checked) foil_cond += 'foilFlg%5B%5D=0&';
	if (document.getElementById("frame_foil").checked) foil_cond += 'foilFlg%5B%5D=1&';
	url = url.replace(/foilFlg%5B\d?%5D=\d(\&|$)/g, '');
	if (foil_cond) url += '&' + foil_cond.replace(/\&$/, '');

	let lang_cond = '';
	if (document.getElementById("lang_JP").checked) lang_cond += 'language%5B%5D=1&';
	if (document.getElementById("lang_EN").checked) lang_cond += 'language%5B%5D=2&';
	url = url.replace(/language%5B\d?%5D=\d(\&|$)/g, '');
	if (lang_cond) url += '&' + lang_cond.replace(/\&$/, '');

	let type_cond = '';
	if (document.getElementById("type_creature").checked) type_cond += 'cardtypes%5B%5D=1&';
	if (document.getElementById("type_enchant").checked) type_cond += 'cardtypes%5B%5D=2&';
	if (document.getElementById("type_artifact").checked) type_cond += 'cardtypes%5B%5D=3&';
	if (document.getElementById("type_instant").checked) type_cond += 'cardtypes%5B%5D=4&';
	if (document.getElementById("type_sorsery").checked) type_cond += 'cardtypes%5B%5D=5&';
	if (document.getElementById("type_pw").checked) type_cond += 'cardtypes%5B%5D=6&';
	if (document.getElementById("type_land").checked) type_cond += 'cardtypes%5B%5D=7&';
	url = url.replace(/cardtypes%5B\d?%5D=\d(\&|$)/g, '');
	if (type_cond) url += '&' + type_cond.replace(/\&$/, '');

	let sort_cond = '';
	if (document.getElementById("sort_color").checked) sort_cond += 'sort=default&';
	if (document.getElementById("sort_price").checked) sort_cond += 'sort=price&';
	url = url.replace(/sort=(default|price)(\&|$)/g, '');
	if (sort_cond) url += '&' + sort_cond.replace(/\&$/, '');

	let order_cond = '';
	if (document.getElementById("order_asc").checked) order_cond += 'order=ASC&';
	if (document.getElementById("order_desc").checked) order_cond += 'order=DESC&';
	url = url.replace(/order=(ASC|DESC)(\&|$)/g, '');
	if (order_cond) url += '&' + order_cond.replace(/\&$/, '');

	url = url.replace(/\&$/, '');
	window.location.href = url;
}

function FoilENSearch_Click() {
	console.log('FoilENSearch_Click');
	document.getElementById("frame_foil").checked = true;
	document.getElementById("frame_normal").checked = false;
	document.getElementById("lang_EN").checked = true;
	document.getElementById("lang_JP").checked = false;

	EXSearch_Click();
}

function NormalENSearch_Click() {
	console.log('FoilENSearch_Click');
	document.getElementById("frame_foil").checked = false;
	document.getElementById("frame_normal").checked = true;
	document.getElementById("lang_EN").checked = true;
	document.getElementById("lang_JP").checked = false;

	EXSearch_Click();
}

function getParam() {
	let params = (location.href).split('?')[1].split('&');

	params.forEach((element) => {
		let [arg, i] = element.split('=');
		arg = arg.replace(/%5B\d?%5D/, '');

		if (arg == 'rarity') {
			if (i == 4) document.getElementById("rarity_m").checked = true;
			if (i == 3) document.getElementById("rarity_r").checked = true;
			if (i == 2) document.getElementById("rarity_u").checked = true;
			if (i == 1) document.getElementById("rarity_c").checked = true;
		} else if (arg == 'colors') {
			if (i == 1) document.getElementById("color_w").checked = true;
			if (i == 2) document.getElementById("color_u").checked = true;
			if (i == 3) document.getElementById("color_b").checked = true;
			if (i == 4) document.getElementById("color_r").checked = true;
			if (i == 5) document.getElementById("color_g").checked = true;
			if (i == 6) document.getElementById("color_c").checked = true;
		} else if (arg == 'foilFlg') {
			if (i == 0) document.getElementById("frame_normal").checked = true;
			if (i == 1) document.getElementById("frame_foil").checked = true;
		} else if (arg == 'language') {
			if (i == 1) document.getElementById("lang_JP").checked = true;
			if (i == 2) document.getElementById("lang_EN").checked = true;
		} else if (arg == 'cardtypes') {
			if (i == 1) document.getElementById("type_creature").checked = true;
			if (i == 2) document.getElementById("type_enchant").checked = true;
			if (i == 3) document.getElementById("type_artifact").checked = true;
			if (i == 4) document.getElementById("type_instant").checked = true;
			if (i == 5) document.getElementById("type_sorsery").checked = true;
			if (i == 6) document.getElementById("type_pw").checked = true;
			if (i == 7) document.getElementById("type_land").checked = true;
		} else if (arg == 'sort') {
			if (i == 'default') document.getElementById("sort_color").checked = true;
			if (i == 'price') document.getElementById("sort_price").checked = true;
		} else if (arg == 'order') {
			if (i == 'ASC') document.getElementById("order_asc").checked = true;
			if (i == 'DESC') document.getElementById("order_desc").checked = true;

		}

	});
}

let n = (location.href).split('?').length;
if( n > 1 ){
	console.log(n)

	const container = document.getElementById("narrow_menu");

	let customarea = document.createElement("div");
	customarea.id = "customarea"
	customarea.innerHTML = "カスタムエリア";

	const tmp = `
		<span class="ex_narrow">
			<label><input type="checkbox" id="type_land"><span>土地</span></label>
			<label><input type="checkbox" id="type_creature"><span>クリーチャー</span></label>
			<label><input type="checkbox" id="type_enchant"><span>エンチャント</span></label>
			<label><input type="checkbox" id="type_artifact"><span>アーティファクト</span></label>
			<label><input type="checkbox" id="type_instant"><span>インスタント</span></label>
			<label><input type="checkbox" id="type_sorsery"><span>ソーサリー</span></label>
			<label><input type="checkbox" id="type_pw"><span>PW</span></label>
		</span>

		<span class="ex_narrow">
			<label><input type="checkbox" id="lang_EN"><span>EN</span></label>
			<label><input type="checkbox" id="lang_JP"><span>JP</span></label>
		</span>

		<span class="ex_narrow">
			<label><input type="checkbox" id="rarity_m"><span>M</span></label>
			<label><input type="checkbox" id="rarity_r"><span>R</span></label>
			<label><input type="checkbox" id="rarity_u"><span>U</span></label>
			<label><input type="checkbox" id="rarity_c"><span>C</span></label>
		</span>

		<span class="ex_narrow">
			<label><input type="checkbox" id="color_w"><span>W</span></label>
			<label><input type="checkbox" id="color_u"><span>U</span></label>
			<label><input type="checkbox" id="color_b"><span>B</span></label>
			<label><input type="checkbox" id="color_r"><span>R</span></label>
			<label><input type="checkbox" id="color_g"><span>G</span></label>
			<label><input type="checkbox" id="color_c"><span>C</span></label>
		</span>

		<span class="ex_narrow">
			<label><input type="checkbox" id="frame_foil"><span>Foil</span></label>
			<label><input type="checkbox" id="frame_normal"><span>Normal</span></label>
		</span>

		<span class="ex_narrow">
			<label><input type="radio" name="exsort" id="sort_color" checked><span>色</span></label>
			<label><input type="radio" name="exsort" id="sort_price"><span>値段</span></label>
			<label><input type="radio" name="exorder" id="order_desc"><span>降順</span></label>
			<label><input type="radio" name="exorder" id="order_asc" checked><span>昇順</span></label>
		</span>
	`

	customarea.innerHTML = tmp;

	let result_area = document.getElementsByClassName("search_item")[0];

	let search_btn = document.createElement("span");
	search_btn.className = "exsearch"
	search_btn.innerHTML = "絞り込む";
	search_btn.addEventListener("click", EXSearch_Click, false);

	result_area.after(search_btn);

	let FoilENSearch_btn = document.createElement("span");
	FoilENSearch_btn.className = "exsearch"
	FoilENSearch_btn.innerHTML = "EN Foil";
	FoilENSearch_btn.addEventListener("click", FoilENSearch_Click, false);

	result_area.after(FoilENSearch_btn);

	let NormalENSearch_btn = document.createElement("span");
	NormalENSearch_btn.className = "exsearch"
	NormalENSearch_btn.innerHTML = "EN Normal";
	NormalENSearch_btn.addEventListener("click", NormalENSearch_Click, false);

	result_area.after(NormalENSearch_btn);

	container.before(customarea);

	getParam();

}

