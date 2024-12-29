import './Note.css'
import React, { useState, useEffect } from 'react'

interface NoteProps {
  id: string;
  content: string;
  onSave: (id: string, content: string) => void
  onDelete: (id: string) => void
}

const Note: React.FC<NoteProps> = ({ id, content: initialContent, onSave, onDelete }) => {
	const [content, setContent] = useState(initialContent)

  useEffect(() => {
    setContent(initialContent)
  }, [initialContent])

	let handleSave = () => {
		onSave(id, content)
	}

	const handlChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setContent(event.target.value)
	}

  const handleDelete = () => {
    onDelete(id)
  }

	return (
		<div className='noteContainer'>
			<button onClick={handleSave} className='saveButton'>
				saved
			</button>
      <button onClick={handleDelete} className='deleteButton'>delete</button>
			<textarea
				className='inputText'
				value={content}
				onChange={handlChange}
			></textarea>
		</div>
	)
}

export default Note