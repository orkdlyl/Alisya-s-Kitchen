// ==========================================================
// SELLER SETTINGS — edit this file only. Used by index.html and seller.html
// ==========================================================
// This file is public (every visitor's browser downloads it), so it must NEVER
// contain secrets. The values below are safe to publish. The Telegram bot token
// now lives only inside Supabase (see SETUP.md).
const CONFIG = {
    brandName: "Alisya's Kitchen",
    currency: 'RM',

    // Supabase > Project Settings > API
    supabaseUrl:     'PASTE_PROJECT_URL_HERE',        // e.g. https://abcdxyz.supabase.co
    supabaseAnonKey: 'PASTE_ANON_PUBLIC_KEY_HERE',    // the "anon" / "publishable" key (NOT service_role)

    // Payment details shown to customers
    duitnowQrImage: 'duitnow-qr.png',   // save your QR image next to index.html
    bankName:    'Maybank',
    bankHolder:  'AINON JARIAH MOHD SHARIF',
    bankNumber:  '162012827502'
};
