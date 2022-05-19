import React, {FC, FormEvent, useState} from 'react';
import GitLogo from '../assets/gitLogo.png';

interface HeaderProps {
    setUsername: (username: string) => void
}

const Header:FC<HeaderProps> = ({setUsername}) => {

    const [inputUsername, setInputUsername] = useState<string>('')

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        setUsername(inputUsername)
        setInputUsername('')
    }

    return (
        <div className={`w-full bg-header h-[72px] flex items-center justify-center`}>
            <div className={'container flex'}>
                <div className={'flex'}>
                    <div><img src={GitLogo} width={'100%'} alt={'git-icon'}/></div>
                    <div className={'ml-5'}>
                        <form onSubmit={event => handleSubmit(event)}>
                            <input
                                type={'text'}
                                value={inputUsername}
                                onChange={(event) => setInputUsername(event.target.value)}
                                className={'w-[500px] h-[40px] rounded-md'}
                            />
                            <input type={"submit"} hidden={true}/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;