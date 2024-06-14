import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const EditNote = ({ note, onSave, onDelete, onCancel }) => {
  const [title, setTitle] = useState(note.title);
  const [desc, setDesc] = useState(note.desc);

  const handleSave = () => {
    onSave(note.id, title, desc);
  };

  const handleDelete = () => {
    onDelete(note.id);
  };

  return (
    <View>
      <TextInput value={title} onChangeText={setTitle} placeholder="Judul" style={{ borderBottomWidth: 1, marginBottom: 10 }} />
      <TextInput value={desc} onChangeText={setDesc} placeholder="Deskripsi" multiline style={{ borderBottomWidth: 1, marginBottom: 10 }} />
      <Button title="Simpan" onPress={handleSave} />
      <Button title="Hapus" onPress={handleDelete} />
      <Button title="Batal" onPress={onCancel} />
    </View>
  );
};

export default EditNote;
