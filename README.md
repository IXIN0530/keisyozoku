# コードの一般的なルール
わざわざコードの書き方にルールを付けるのは、他者や未来の自分が理解しやすくするためです。これにより、変更に強くバグを生みずらくなります。
## 命名のルール
1. JavaScriptではcamelCaseで命名
2. HTML, CSSではkebab-caseで命名
3. 複数の値を扱う変数には複数形の英単語
4. 変数、関数などの名前にローマ字はNG

    英単語が難しい場合には、
    ```js
    /**
     * 選択科目
     */
    const electiveSubjects = [...]
    ```
    のように注釈をつけることで、変数をホバーしたときに確認できるようになります。
5. boolean値にはis〇〇のように命名

    `isSelected`や`didMount`のように書くことで、boolean値を表していることが分かりやすくなります。
6. Reactの流儀に従う

    HTML要素のonChangeには`handleChange`、onClickには`handleClick`のように名付けた関数を渡すのが通例です。ただし、渡す関数が単にstateを更新するだけではなく、複雑なロジックを持っている場合は、そのロジックを説明する名前にしたほうがわかりやすいでしょう。
    
    複数の`handleChange`を区別したいときは、`handlePointChange`、`handleSubjectChange`のようにすると区別できます。
## 書き方のルール
1. stateでは変数の依存関係を正しく反映する

    `MakeSubject.js`において、`borderBottom1`や`nowSubject`などは`isRequired`によって決まる変数なので、それぞれをstateとして定義するべきではありません。stateの更新し忘れや、パフォーマンスの低下につながります。