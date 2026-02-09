import './styles/main.scss';
import { createButton } from './components/Button/Button';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
    <h1>Button Bileşeni - TypeScript + SCSS</h1>
    <div id="button-container"></div>
`;

const container = document.querySelector('#button-container')!;

const primaryButton = createButton({
    text: 'Primary Button',
    variant: 'primary'
});

const secondaryButton = createButton({
    text: 'Secondary Button',
    variant: 'secondary'
});

const dangerButton = createButton({
    text: 'Danger Button',
    variant: 'danger'
});

const largeButton = createButton({
    text: 'Large Button',
    variant: 'primary',
    size: 'large'
});

const disabledButton = createButton({
    text: 'Disabled Button',
    variant: 'primary',
    disabled: true
});

const clickableButton = createButton({
    text: 'Click Me!',
    variant: 'secondary',
    onClick: () => {
        alert('Butona tıkladın! 🎉');
    }
});

container.appendChild(primaryButton);
container.appendChild(secondaryButton);
container.appendChild(dangerButton);
container.appendChild(largeButton);
container.appendChild(disabledButton);
container.appendChild(clickableButton);
