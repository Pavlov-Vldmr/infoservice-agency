import React, { useEffect, useState } from 'react';

interface TimeSchedule {
    open: string;  // "09:00"
    close: string; // "18:00"
    breakStart: string; // "13:00"
    breakEnd: string;   // "14:00"
}

// Вспомогательный компонент для форматирования времени
const FormattedTime: React.FC<{ timeStr: string }> = ({ timeStr }) => {
    const [hours, minutes] = timeStr.split(':');

    return (
        <span >
            <span > {hours}</span>
            <sup >{minutes}</sup>
        </span>
    );
};

export const BusinessHours: React.FC = () => {
    // Исходные данные расписания
    const schedule: TimeSchedule = {
        open: "09:00",
        close: "18:00",
        breakStart: "13:00",
        breakEnd: "14:00"
    };

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isBreak, setIsBreak] = useState<boolean>(false);

    useEffect(() => {
        const checkStatus = () => {
            const now = new Date();
            const currentMinutes = now.getHours() * 60 + now.getMinutes();

            const parseToMinutes = (t: string) => {
                const [h, m] = t.split(':').map(Number);
                return h * 60 + m;
            };

            const start = parseToMinutes(schedule.open);
            const end = parseToMinutes(schedule.close);
            const bStart = parseToMinutes(schedule.breakStart);
            const bEnd = parseToMinutes(schedule.breakEnd);

            const brk = currentMinutes >= bStart && currentMinutes < bEnd;
            const open = currentMinutes >= start && currentMinutes < end && !brk;

            setIsOpen(open);
            setIsBreak(brk);
        };

        checkStatus();
        const interval = setInterval(checkStatus, 60000); // Обновление каждую минуту
        return () => clearInterval(interval);
    }, []);

    return (
        <span >
            <span >
                {/* <span>Режим работы:</span> */}
                <FormattedTime timeStr={schedule.open} />
                <span>—</span>
                <FormattedTime timeStr={schedule.close} />
            </span>

            <div >
                <span>Перерыв:</span>
                <FormattedTime timeStr={schedule.breakStart} />
                <span>—</span>
                <FormattedTime timeStr={schedule.breakEnd} />
            </div>
        </span>
    );
};

export default BusinessHours;
