import { config } from '../config';

export const orderService = {
    createOrder: async (formData) => {
        try {
            const response = await fetch(`${config.API_BASE_URL}/orders`, {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Terjadi kesalahan saat membuat pesanan');
            }

            return result;
        } catch (error) {
            throw error;
        }
    },

    checkStatus: async (keyword) => {
        try {
            const response = await fetch(`${config.API_BASE_URL}/orders/check-status?keyword=${encodeURIComponent(keyword)}`);
            const result = await response.json();

            if (!response.ok) {
                // Jika 404, kita kembalikan null atau object khusus agar UI bisa handle "Not Found"
                if (response.status === 404) {
                    return null;
                }
                throw new Error(result.message || 'Gagal mengecek status');
            }

            return result.data;
        } catch (error) {
            throw error;
        }
    },

    getPackages: async () => {
        try {
            const response = await fetch(`${config.API_BASE_URL}/packages`);
            const result = await response.json();
            if (!response.ok) throw new Error(result.message);
            return result.data || [];
        } catch (error) {
            console.error('Error fetching packages:', error);
            return [];
        }
    },

    getHostings: async () => {
        try {
            const response = await fetch(`${config.API_BASE_URL}/hostings`);
            const result = await response.json();
            if (!response.ok) throw new Error(result.message);
            return result.data || [];
        } catch (error) {
            console.error('Error fetching hostings:', error);
            return [];
        }
    },

    getPackagesGrouped: async () => {
        try {
            const response = await fetch(`${config.API_BASE_URL}/packages/grouped`);
            const result = await response.json();
            if (!response.ok) throw new Error(result.message);
            return result.data || [];
        } catch (error) {
            console.error('Error fetching grouped packages:', error);
            return [];
        }
    }
};
