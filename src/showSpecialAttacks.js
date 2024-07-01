export function showSpecialAttacks({ special }) {
    return special.map(({ id, name, description, icon }) => {
        return {
            id,
            name,
            icon,
            description: description || 'Описание недоступно',
        };
    });
}