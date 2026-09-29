function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading) return;
    if (newValue === '1') {
        g_form.addWarningMessage('Critical Priority selected — Assignment Group is now required. Please also provide a Justification.');
    }
}