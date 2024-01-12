function saudacao(name?: string): string {
    
    const meuNome = (name ? `, ${name}.` : '.');
    return 'Good Morning' + meuNome;
}

