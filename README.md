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
2. 責務の範囲に注意

    `MakeSubject.js`では、Formのsubmit時に新しいデータを追加していました。
    ```js
    setSubjectAndPointList([...subjectAndPointList, {
      isRequired,
      subject,
      score,
      backgroundColor,
      color: createPointColor(score)
    }]);
    ```
    このデータには、`isRequired`、`subject`、`score`、`backgroundColor`、`color`、のように様々な情報が入っていますが、
    - `ExportPoints.js`では、
        - `subject`
        - `score`
        - `backgroundColor`
        - `color`
        
        のみを、
    - `Calculate.js`では、
        - `isRequired`
        - `subject`
        - `score`
        
        のみを
    
    使用しています。つまり、共通して使用しているのは、`subject`と`score`のみです。よって、`isRequired`、`backgroundColor`、`color`は本当に追加すべきでしょうか。実際、`backgroundColor`は`isRequired`に、`color`は`score`に依存しているので、`backgroundColor`と`color`は追加する必要ありません。

    まとめると、**特定の場所でしか用いない**かつ**他の値から計算可能である**ような値は、その場所で扱えばいいので、グローバルなデータに追加しない方がいいです。簡単にいうと**無駄なデータは追加するな**ということです。
3. コンポーネントの分割

    これも2の責務の分割に関係しますが、コンポーネントは機能単位で分割しましょう。コンポーネント内で定義した関数や変数が一部でしか使われていないのであれば、その部分だけを分割することで、パフォーマンスの改善やバグの抑止、再利用可能性の向上につながります。
    > ただし、個人開発や少人数開発の場合は、そのグループ内で納得できる範囲で分割すればいいと思います。

    あくまで、開発効率を向上させるためなので、明らかに便利になる範囲内で積極的に分割しましょう。
4. 渡すpropsは最小限に

    propsを最小限にすることで、パフォーマンスの改善、責務の分離、バグの抑止につながります。