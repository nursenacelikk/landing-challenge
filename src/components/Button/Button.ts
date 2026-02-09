// SCSS'i içe aktar
import './Button.scss';

// Button türleri (type)
export type ButtonVariant = 'primary' | 'secondary' | 'danger';
export type ButtonSize = 'medium' | 'large';

// Button ayarları (interface)
export interface ButtonConfig {
    text: string;                    // Buton yazısı
    variant?: ButtonVariant;         // Renk (opsiyonel)
    size?: ButtonSize;               // Boyut (opsiyonel)
    disabled?: boolean;              // Disabled mı? (opsiyonel)
    onClick?: () => void;            // Tıklanınca ne olacak? (opsiyonel)
}

// Button oluşturma fonksiyonu
export function createButton(config: ButtonConfig): HTMLButtonElement {
    const {
        text,
        variant = 'primary',      // Varsayılan: primary
        size = 'medium',          // Varsayılan: medium
        disabled = false,         // Varsayılan: false
        onClick
    } = config;
    
    // Button elementi oluştur
    const button = document.createElement('button');
    
    // Class'ları ekle
    button.classList.add('btn');
    button.classList.add(`btn--${variant}`);
    
    if (size === 'large') {
        button.classList.add('btn--large');
    }
    
    // Yazıyı ekle
    button.textContent = text;
    
    // Disabled durumu
    button.disabled = disabled;
    
    // Click eventi
    if (onClick) {
        button.addEventListener('click', onClick);
    }
    
    return button;
}