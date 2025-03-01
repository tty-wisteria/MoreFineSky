# 制作の背景
TCG「Magic: the Gathering」の専門店である「晴れる屋」の通信販売サイトにて、
- 特定の条件で検索することが多い
- 検索結果ページから、複数の条件で絞り込むことが多い

という状況があり、個人的なUX改善のために作成。

# 機能解説
該当サイトのデフォルト機能では、検索結果ページから条件を追加する場合、各ボタンを選択すると再度検索が実行される。
例として[この検索結果](https://www.hareruyamtg.com/ja/products/search?suggest_type=all&product=%E6%84%8F%E5%BF%97%E3%81%AE%E5%8A%9B&category=)から、「Normal」かつ「EN」と絞り込みたい場合、2回検索の実行が必要になる。

そこでこのプラグインでは、「Normal」かつ「EN」と選択できるチェックボックスを追加し、検索条件を追加したURLを発行し遷移するという機能を持たせている。

また細かい点として、条件の箇所の縦幅を狭くすることでファーストビューの幅をもたせつつ、ページに追従させている。

![Image](https://github.com/user-attachments/assets/abb876d1-cea9-4eca-84df-2a2a1d791086)
