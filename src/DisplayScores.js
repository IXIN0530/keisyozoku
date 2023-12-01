import React from 'react'
import useCreateDeleteMe from './hooks/useCreateDeleteMe'
import ScoreBoard from './ScoreBoard';

const DisplayScores = ({ data, setData }) => {
  const createDeleteMe = useCreateDeleteMe(data, setData);

  return (
    <div className='List'>
      {data.length ? (
        data.map((item, index) =>
          <ScoreBoard
            // TODO: 同じ教科を複数登録させないようにする。
            key={item.subject + String(index)}
            subjectAndPoint={item}
            deleteMe={createDeleteMe(index)}
          />
        )
      ) : (
        <p style={{ color: "gray", borderBottom: "1px solid black" }}>まだ点数が保存されていません</p>
      )}
    </div>
  );
}

export default DisplayScores