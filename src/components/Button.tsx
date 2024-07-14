export type ButtonProps = {
    size: 'size-64' | 'size-32' | 'size-16';
    color: 'bg-red-800' | 'bg-blue-800' | 'bg-green-800';
    text: string;
    onClick?: () => void;
}

export default function Button({ size, color, text, onClick }: ButtonProps) {
    return (
        <div className={`${size} ${color} flex justify-center items-center rounded-md`} onClick={onClick}>
            {text}
        </div >
    );
}