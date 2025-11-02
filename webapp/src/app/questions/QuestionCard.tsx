import {Question} from "@/lib/types";
import {Chip} from "@heroui/chip";
import Link from "next/link";
import {Avatar} from "@heroui/avatar";
import {timeAgo} from "@/lib/util";

type Props = {
    question: Question
}

export default function QuestionCard({ question }: Props) {
    const contentPreview = question.content.replace(/<[^>]*>/g, '').substring(0, 200);
    
    return (
        <div className='flex flex-col w-full gap-4'>
            <div className='flex gap-4 flex-1'>
                <div className='flex flex-col items-center gap-2 min-w-[80px]'>
                    <div className='text-center text-sm font-semibold'>{question.votes}</div>
                    <div className='text-center text-xs text-foreground-500'>votes</div>
                    <div className='text-center text-sm font-semibold'>{question.answerCount}</div>
                    <div className='text-center text-xs text-foreground-500'>answers</div>
                    <div className='text-center text-sm font-semibold'>{question.viewCount}</div>
                    <div className='text-center text-xs text-foreground-500'>views</div>
                </div>
                
                <div className='flex flex-col flex-1 gap-2'>
                    <Link 
                        href={`/questions/${question.id}`}
                        className='text-xl font-semibold hover:text-primary transition-colors'
                    >
                        {question.title}
                    </Link>
                    <p className='text-sm text-foreground-600 line-clamp-2'>
                        {contentPreview}{question.content.length > 200 ? '...' : ''}
                    </p>
                    
                    <div className='flex justify-between mt-2'>
                        <div className='flex flex-col self-end'>
                            <div className='flex gap-2'>
                                {question.tagSlugs.map(tag => (
                                    <Chip
                                        as={Link}
                                        variant='bordered'
                                        href={`/questions?tag=${tag}`}
                                        key={tag}
                                    >
                                        {tag}
                                    </Chip>
                                ))}
                            </div>
                        </div>

                        <div className='flex flex-col basis-2/5 bg-primary/10 px-3 py-2 gap-2 rounded-lg'>
                            <span className='text-sm font-extralight'>asked {timeAgo(question.createdAt)}</span>
                            <div className='flex items-center gap-3'>
                                <Avatar className='h-6 w-6' color='secondary'
                                        name={question.askerDisplayName?.charAt(0)} />
                                <div className='flex flex-col items-center'>
                                    <span>{question.askerDisplayName}</span>
                                    <span className='self-start text-sm font-semibold'>42</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}