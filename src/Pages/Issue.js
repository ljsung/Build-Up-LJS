import React, {useState} from 'react';

function Issue() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    const [situation, setsituation] = useState('');
    const [backlogname, setBacklogname] = useState('');

    const handleTitleChange = (event) => setTitle(event.target.value);
    const handleDescriptionChange = (event) => setDescription(event.target.value);
    const handlePriorityChange = (event) => setPriority(event.target.value);
    const handleBacklognameChange = (event) => setBacklogname(event.target.value);

    return (
        <form>
            <label>
                제목:
                <input type="text" value={title} onChange={handleTitleChange}/>
            </label>
            <br/>
            <label>
                설명:
                <input type="text" value={description} onChange={handleDescriptionChange}/>
            </label>
            <br/>
            <label>
                중요도:
                <select value={priority} onChange={handlePriorityChange}>
                <option value="">선택</option>
                <option value="high">높음</option>
                <option value="medium">중간</option>
                <option value="low">낮음</option>
                </select>
            </label>
            <br/>
            <label>
                상태:
                <select value={situation} onChange={handlePriorityChange}>
                <option value="">선택</option>
                <option value="ing">진행중</option>
                <option value="complete">완료</option>
                </select>
            </label>
            <button type="save">저장</button>
            <button type="submit">수정</button>
            <br/>
            <label>
                백로그 이름:
                <input type="text" value={backlogname} onChange={handleBacklognameChange}/>
            </label>
            <br/>
            <button type="delete">이슈 삭제</button>
            <button type="correction">이슈 수정</button>
        </form>
        
    );
}

export default Issue;
