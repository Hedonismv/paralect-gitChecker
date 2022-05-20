import React, {FC, FormEvent, useState} from 'react';
import GitLogo from '../assets/gitLogo.svg';
import InputSearchIcon from '../assets/inputSearch.svg';

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
        <div className={`w-full bg-header h-header-size flex items-center justify-center`}>
            <div className={'md:container flex'}>
                <div className={'flex'}>
                    <div><img src={GitLogo} width={'40px'} alt={'git-icon'}/></div>
                    <div className={'ml-5'}>
                        <form className={'relative'} onSubmit={event => handleSubmit(event)}>
                            <img alt={'search-icon'} src={InputSearchIcon} className={'absolute box-border pl-3 py-2'}/>
                            <input
                                type={'text'}
                                placeholder={'Enter GitHub username'}
                                value={inputUsername}
                                onChange={(event) => setInputUsername(event.target.value)}
                                className={'w-full md:w-[500px] h-[40px] pr-5 rounded-md box-border pl-12 md:text-base font-light outline-0'}
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