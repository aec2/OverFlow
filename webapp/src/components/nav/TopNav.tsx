import Link from "next/link";
import {AcademicCapIcon, MagnifyingGlassIcon} from "@heroicons/react/24/solid";
import {Input} from "@heroui/input";
import {Button} from "@heroui/button";

export default function TopNav() {
    return (
        <header className='p-2 w-full fixed top-0 z-50 border-b bg-white'>
            <div className='flex items-center px-10 mx-auto'>
                <div className='flex items-center gap-6'>
                    <Link href='/' className='flex items-center gap-3 max-h-16'>
                        <AcademicCapIcon className='size-10 text-secondary' />
                        <h3 className='text-xl font-semibold uppercase'>Overflow</h3>
                    </Link>
                    <nav className='flex gap-3 my-2 text-md text-neutral-500'>
                      <Link href='/'>About</Link>  
                      <Link href='/'>Products</Link>  
                      <Link href='/'>Contact</Link>  
                    </nav>
                </div>
                <div className='ml-6 flex-1 max-w-md'>
                    <Input 
                        startContent={<MagnifyingGlassIcon className='size-5 text-gray-600' />}
                        classNames={{
                            base: "h-10",
                            input: "bg-gray-100",
                            inputWrapper: "bg-gray-100 h-10 data-[hover=true]:bg-gray-100 group-data-[focus=true]:bg-gray-100"
                        }}
                        variant="flat"
                        type='search' 
                        placeholder='Search'
                        size="md"
                    />
                </div>
                <div className='flex basis-1/4 shrink-0 justify-end gap-3'>
                    <Button color="secondary" variant="bordered">Login</Button>
                    <Button color="secondary" >Register</Button>
                </div>
            </div>
        </header>
    );
}
