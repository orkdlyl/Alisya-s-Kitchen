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
    supabaseUrl:     'https://txnqtrifknqtmbwdehah.supabase.co',        // e.g. https://abcdxyz.supabase.co
    supabaseAnonKey: 'sb_publishable_bBid7fbSsnRPFrc3GVk8sA_FwL_Y3-D',    // the "anon" / "publishable" key (NOT service_role)

    // Payment details shown to customers
    duitnowQrImage: 'duitnow-qr.png',   // save your QR image next to index.html
    bankName:    'Maybank',
    bankHolder:  'AINON JARIAH MOHD SHARIF',
    bankNumber:  '162012827502'
};
