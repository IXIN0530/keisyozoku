import React from 'react'
import ExportPoints from './ExportPoints'

const DisplayScores = ({ subjectAndPointList, setSubjectAndPointList }) => {
  return (
    <div className='List'>
      {subjectAndPointList.length ? (
        subjectAndPointList.map((item, index) =>
          <ExportPoints
            // TODO: 同じ教科を複数登録させないようにする。
            key={item.subject + String(index)}
            index={index}
            isRequired={item.isRequired}
            subject={item.subject}
            score={item.score}
            subjectAndPointList={subjectAndPointList}
            setSubjectAndPointList={setSubjectAndPointList}
          />
        )) : (
        <p style={{ color: "gray", borderBottom: "1px solid black" }}>まだ点数が保存されていません</p>
      )}
    </div>
  )
}

export default DisplayScores