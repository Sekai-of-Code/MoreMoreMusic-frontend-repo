import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Renders a Card root element with base styling and the `data-slot="card"` attribute.
 *
 * Additional props are forwarded to the root `div` element.
 *
 * @param className - Additional CSS classes to merge with the Card's base classes
 * @returns A `div` element styled and annotated as the Card container
 */
function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders the header region of a Card with layout and responsive grid positioning.
 *
 * The rendered div has `data-slot="card-header"`, merges the component's base header classes with any
 * provided `className`, and forwards remaining div props.
 *
 * @returns A div element used as the card header with the composed className and forwarded props.
 */
function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a card title container with title typography and data-slot="card-title".
 *
 * @param className - Additional CSS class names to merge with the component's base typography classes.
 * @returns The card title DOM element.
 */
function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

/**
 * Renders the card description slot with muted, small text styling.
 *
 * The element forwards all standard `div` props and composes the provided
 * `className` with the component's description styles.
 *
 * @returns A `div` element with `data-slot="card-description"` and the composed description styling.
 */
function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

/**
 * Renders the card action slot positioned at the top-right of the card.
 *
 * @returns A `div` element with `data-slot="card-action"`, composed positioning classes (merged with any provided `className`), and any additional props spread onto it.
 */
function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders the card's primary content area.
 *
 * Renders a div with horizontal padding that serves as the card content container and merges any provided classes.
 *
 * @param className - Additional CSS classes to merge with the component's base padding
 * @returns A div element used as the card content area with applied padding and merged classes
 */
function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

/**
 * Renders the footer region of a Card.
 *
 * @returns A `div` element with data-slot="card-footer" and layout padding/spacing classes applied
 */
function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}