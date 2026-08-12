const STORAGE_KEY = 'web_libya_telegram_settings';

export interface TelegramSettings {
  botToken: string;
  chatId: string;
}

export function saveTelegramSettingsLocal(settings: TelegramSettings): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch (e) {
    console.error('Failed to save Telegram settings to localStorage:', e);
  }
}

export function getTelegramSettingsLocal(): TelegramSettings | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as TelegramSettings;
    if (parsed.botToken && parsed.chatId) return parsed;
    return null;
  } catch (e) {
    console.error('Failed to read Telegram settings from localStorage:', e);
    return null;
  }
}
