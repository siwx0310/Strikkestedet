import { ComponentPropsWithoutRef, ElementType } from 'react';
import clsx from 'clsx';

type Props = ComponentPropsWithoutRef<'div'> & {
    as?: ElementType<any>;
    fullWidth?: boolean;
    innerClassName?: string;
};

/**
 * Wrapper around our content, that ensures we stick to the Grid sizing
 **/
function Container({
                       children,
                       className,
                       as: Component = 'div',
                       fullWidth,
                       innerClassName,
                       ...rest
                   }: Props) {
    return (
        <Component
            className={clsx(
                'px-4 mx-auto max-w-screen-2xl lg:px-24',
                'lg:grid lg:grid-cols-10 lg:gap-6',
                className
            )}
            {...rest}
        >
            <div
                className={clsx(
                    'col-start-1 ',
                    fullWidth ? 'lg:col-end-11' : 'lg:col-end-10',
                    innerClassName
                )}
            >
                {children}
            </div>
        </Component>
    );
}

export default Container;
