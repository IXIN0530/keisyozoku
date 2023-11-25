import { useState } from "react";

const MakeSubject = ({ subAndPoint, setSubAndPoint }) => {
  //科目データ
  //選択部分
  const senSubject = [
    "化学実験第一(2)",
    "化学実験第二(2)",
    "物理学実験第一",
    "物理学実験第二",
    "物理学演習第一",
    "物理学演習第二",
    "生命科学基礎3Q",
    "生命科学基礎4Q",
    "生命科学基礎実験",
    "情報リテラシ第一",
    "情報リテラシ第二",
    "コンピュータサイエンス第一",
    "コンピュータサイエンス第二",
    "基礎データサイエンスAI",
    "学院別専門科目1Q",
    "学院別専門科目2Q",
    "学院別専門科目3Q",
    "学院別専門科目4Q",
    "その他学院別専門科目",
    "宇宙地球科学A(2)",
    "宇宙地球科学B(2)",
    "環境安全論",
    "ウェルネス実習",
    "生涯ウェルネス実習",
    "科学技術の最前線",
    "英語選択科目1Q",
    "英語選択科目2Q",
    "英語選択科目3Q",
    "英語選択科目4Q",
    "図学製図",
    "図学デザイン第一(2)",
    "図学デザイン第二(2)",
    "図学製図",
    "図形科学とCG",
    "宇宙地球科学ラボ(2)",
    "線形代数第二(2)",
    "線形代数演習第二",
    "微分積分学第二(2)",
    "微分積分演習第二",
    "グローバル理工人入門(2)",
  ];
  const hiSubject = [
    "英語第一",
    "英語第二",
    "英語第三",
    "英語第四",
    "線形代数第一",
    "線形代数第二",
    "力学基礎第一",
    "力学基礎第二",
    "電磁気学基礎第一",
    "電磁気学基礎第二",
    "無機化学基礎",
    "有機化学基礎",
    "量子化学基礎",
    "化学熱力学基礎",
    "文系教養2Q",
    "文系教養3Q",
    "文系教養4Q",
    "生命科学基礎1Q",
    "生命科学基礎2Q",
  ];
  const [nowSubject, setNowSubject] = useState(senSubject);
  //ボタンのカスタマイズ
  const [borderBottom1, setBorderBottom1] = useState("rgb(0, 185, 0)  solid");
  const [borderBottom2, setBorderBottom2] = useState("none");
  const select_style1 = {
    borderBottom: borderBottom1,
    transition: "ease-in-out 0.3s"
  };
  const select_style2 = {
    borderBottom: borderBottom2,
    transition: "ease-in-out 0.3s"
  };
  //参照するときにはtargetという文言が必要
  const buttonClick = (e) => {
    if (e.target.className === "sen") {
      setBorderBottom1("rgb(0, 185, 0)  solid");
      setBorderBottom2("none");
      setNowSubject(senSubject);
    }
    else {
      setBorderBottom1("none");
      setBorderBottom2("rgb(0, 185, 0)  solid");
      setNowSubject(hiSubject);
    }
  }
  //登録ボタンが押された時の処理
  const [pointValue, setPointValue] = useState("");
  const [a, setA] = useState("化学実験第一(2)"); //今選択されている科目
  const ChangeSelect = (e) => {
    console.log(e.target.value);
    setA(e.target.value);
  }
  const ResisterClick = (e) => {
    setPointValue(e.target.value);
  }
  const ResisterForm = (e) => {
    e.preventDefault();
    setSubAndPoint([...subAndPoint, { id: a, points: pointValue }]);//登録されたすべての強化データへ送る。
    setPointValue("");
  }
  return (
    <>
      <p>科目選択と点数登録</p>
      <div className="Form">
        <button className="sen" style={select_style1} onClick={buttonClick}>選択</button>
        <button className="hi" style={select_style2} onClick={buttonClick}>必修</button>
        <select onChange={ChangeSelect} name="Select">
          {nowSubject.map((item, index) => <option value={item}>{item}</option>)}
        </select>
        <form onSubmit={ResisterForm} >
          <input onChange={ResisterClick} className="point" required value={pointValue} placeholder="入力"></input>
          <button className="resister_button" >登録</button>
        </form>
      </div>
    </>
  );
}

export default MakeSubject;