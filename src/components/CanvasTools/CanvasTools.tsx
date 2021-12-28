import { observer } from 'mobx-react-lite';
import React, { ChangeEventHandler } from 'react';
import { useStore } from 'index';
import { useNavigate } from 'react-router';
import { Color, ToolsContainer } from './CanvasTools.styles';
import { tools } from './toolsArray';
import { SaveBtn } from 'controls/SaveBtn/SaveBtn';
import { ToolBtn } from 'controls/ToolBtn/ToolBtn';
import { LineWidthBtn } from 'controls/LineWidthBtn/LineWidthBtn';
import { CanvasRefProps } from '../NewImage/NewImage.interfaces';

export const Tools: React.FC<CanvasRefProps> = observer(({ canvasRef }) => {
  const { newImageStore } = useStore();
  const navigate = useNavigate();

  const onColorChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    newImageStore.setChosenColor(e.currentTarget.value);
  };

  const saveImage = () => {
    if (canvasRef.current) {
      newImageStore.saveImage(canvasRef.current.toDataURL());
      navigate('/images');
    }
  };

  return (
    <ToolsContainer>
      {tools.map((tool) => (
        <ToolBtn key={tool.action} action={tool.action} image={tool.image} />
      ))}
      <Color
        type="color"
        onChange={onColorChange}
        value={newImageStore.chosenColor}
      />
      <LineWidthBtn />
      <SaveBtn saveImage={saveImage} />
    </ToolsContainer>
  );
});
