import IMask from 'imask';

interface PhoneMaskRawProps {
    phone: string;
    className?: string
}

function PhoneComponent({ phone, className }: PhoneMaskRawProps) {

    const rawPhone = phone.replace(/\D/g, '')
    const masked = IMask.createMask({
        mask: '+{7} (000) 000-00-00'
    });
    masked.resolve(rawPhone);
    const formattedPhone = masked.value;

    return (
        <a href={`tel:+${rawPhone}`} className={className}>{formattedPhone}</a>
    )
}

export default PhoneComponent;