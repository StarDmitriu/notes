import Note from '@/app/components/Note'
import React, { useState, useEffect } from 'react'
import './main.css'

export default function Home() {
	const [notes, setNotes] = useState<{id: string; content: string}[]>([])
	useEffect(() => {
		const savedNotes = localStorage.getItem('notes')
		if(savedNotes){
			setNotes(JSON.parse(savedNotes))
		}
	}, [])

	const createNewNote = () => {
		const newId = `note${notes.length + 1}`
		setNotes([...notes, { id: newId, content: '' }])
	}

	const saveNote = (id: string, content: string) => {
		const updateNotes = notes.map(note => 
			note.id === id ? {...note, content} : note
		)
		setNotes(updateNotes)
		localStorage.setItem('notes', JSON.stringify(updateNotes))
	}

	const deleteNote = (id: string) => {
		const updateNotes = notes.filter(note => note.id !== id)
		setNotes(updateNotes)
		localStorage.setItem('notes', JSON.stringify(updateNotes))
	}

	return (
		<div>
			<div className='notesContainer'>
				{notes.map(note => (
					<Note key={note.id} id={note.id} content={note.content} onSave={saveNote} onDelete={deleteNote}/>
				))}
			<button className='newNoteButton' onClick={createNewNote}>создать</button>
			</div>
		</div>
	)
}

