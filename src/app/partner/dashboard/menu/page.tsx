"use client";

export default function MenuManagementPage() {
    const menuCategories = [
        {
            name: "Appetizers",
            items: [
                { name: "Wagyu Tartare", price: "¥4,800", available: true },
                { name: "Seasonal Ceviche", price: "¥3,600", available: true },
                { name: "Foie Gras Terrine", price: "¥5,200", available: false },
            ],
        },
        {
            name: "Main Course",
            items: [
                { name: "A5 Wagyu Striploin", price: "¥18,000", available: true },
                { name: "Grilled Langoustine", price: "¥12,500", available: true },
                { name: "Truffle Risotto", price: "¥8,800", available: true },
            ],
        },
        {
            name: "Desserts",
            items: [
                { name: "Chocolate Fondant", price: "¥3,200", available: true },
                { name: "Yuzu Sorbet Tasting", price: "¥2,800", available: false },
            ],
        },
    ];

    return (
        <div className="space-y-8">
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-2xl font-light text-white uppercase tracking-tight mb-2">Menu Management</h1>
                    <p className="text-gray-400 font-light tracking-wide text-sm">Manage your current menu offerings and availability for DiFine members.</p>
                </div>
                <button className="bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-widest px-5 py-3 rounded transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] font-icon">add</span>
                    Add Item
                </button>
            </div>

            <div className="space-y-6">
                {menuCategories.map((category) => (
                    <div key={category.name} className="bg-surface-dark border border-white/10 rounded-lg overflow-hidden">
                        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
                            <h2 className="text-white text-sm font-bold uppercase tracking-widest">{category.name}</h2>
                            <span className="text-gray-500 text-xs">{category.items.length} items</span>
                        </div>
                        <div className="divide-y divide-white/5">
                            {category.items.map((item) => (
                                <div key={item.name} className="px-6 py-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className={`size-2 rounded-full ${item.available ? "bg-green-500" : "bg-red-400"}`} />
                                        <div>
                                            <p className="text-white text-sm font-medium">{item.name}</p>
                                            <p className="text-gray-500 text-xs">{item.available ? "Available" : "Unavailable"}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <span className="text-white text-sm font-medium">{item.price}</span>
                                        <button className="text-gray-500 hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined text-[18px] font-icon">edit</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
