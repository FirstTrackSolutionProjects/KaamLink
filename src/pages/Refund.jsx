export default function RefundCancellation() {
  return (
    <section className="py-14 lg:py-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Refund & Cancellation Policy
        </h1>
        <p className="mt-2 text-sm text-muted">Last updated: July 1, 2026</p>
        <p className="mt-5 text-ink/80 leading-relaxed">
          This policy explains how cancellations, rescheduling, and refunds
          work on KaamLink. It applies to all bookings made through the
          Platform.
        </p>

        <div className="mt-10 space-y-10">
          <div>
            <h2 className="text-xl font-display font-bold">1. Overview</h2>
            <div className="mt-3 space-y-3 text-ink/80 leading-relaxed">
              <p>
                We want booking a service on KaamLink to feel risk-free.
                This policy sets out when you can cancel or reschedule a
                booking free of charge, when a refund applies, and how long
                refunds take to process.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold">2. Cancellation by You</h2>
            <div className="mt-3 space-y-3 text-ink/80 leading-relaxed">
              <p>
                You may cancel a booking free of charge up to{" "}
                <strong>6 hours</strong> before the scheduled slot. Any
                amount already paid will be refunded in full.
              </p>
              <p>
                Cancellations made within 6 hours of the scheduled slot, or
                repeated no-shows, may be subject to a cancellation fee to
                compensate the assigned professional for the reserved time.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold">3. Cancellation by KaamLink or the Professional</h2>
            <div className="mt-3 space-y-3 text-ink/80 leading-relaxed">
              <p>
                If a professional is unable to make it to your booking, or if
                we are unable to assign a professional for your requested
                slot, you will be notified as early as possible and offered
                a free reschedule or a full refund, your choice.
              </p>
              <p>
                If a service cannot be completed due to circumstances beyond
                the professional's control (for example, an unsafe worksite
                or missing access), you will only be charged for the work
                actually completed, and the remaining amount will be
                refunded.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold">4. Rescheduling Policy</h2>
            <div className="mt-3 space-y-3 text-ink/80 leading-relaxed">
              <p>
                You can reschedule a booking free of charge up to 6 hours
                before the scheduled slot, subject to availability of a
                professional for your new preferred time. Rescheduling
                requests made after this window are treated as a
                cancellation and may be subject to the cancellation fee
                described above.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold">5. Refund Eligibility</h2>
            <div className="mt-3 space-y-3 text-ink/80 leading-relaxed">
              <p>You are eligible for a refund if:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>You cancel a booking within the free cancellation window (6 hours or more before the slot).</li>
                <li>KaamLink or the assigned professional cancels or is unable to complete the booking.</li>
                <li>You were charged but the booking was never confirmed.</li>
                <li>You raise a valid quality complaint within the 7-day service warranty and the issue cannot be resolved by a free re-visit.</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold">6. Refund Process & Timeline</h2>
            <div className="mt-3 space-y-3 text-ink/80 leading-relaxed">
              <p>
                Once a refund is approved, it is initiated to your original
                payment method within 24 hours. From there, timelines depend
                on your bank or payment provider:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>UPI: 2–4 business days</li>
                <li>Credit/debit card: 5–7 business days</li>
                <li>Net banking: 5–7 business days</li>
                <li>Wallet balance: instant, credited to your KaamLink wallet</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold">7. Non-Refundable Cases</h2>
            <div className="mt-3 space-y-3 text-ink/80 leading-relaxed">
              <p>The following are generally not eligible for a refund:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Cancellations made within 6 hours of the scheduled slot, beyond the fee already deducted.</li>
                <li>Cost of materials or parts already purchased specifically for your job, once purchased.</li>
                <li>Work that has already been completed to the agreed scope.</li>
                <li>Bookings made using non-refundable promotional credits or discount codes, unless required by law.</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold">8. Service Quality Refunds</h2>
            <div className="mt-3 space-y-3 text-ink/80 leading-relaxed">
              <p>
                Most services include a 7-day service warranty. If you're not
                satisfied with the outcome, contact our support team within 7
                days of the service and we will first arrange a free re-visit
                to fix the issue. If the issue still cannot be resolved, a
                partial or full refund will be issued based on the nature of
                the complaint.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold">9. How to Request a Cancellation or Refund</h2>
            <div className="mt-3 space-y-3 text-ink/80 leading-relaxed">
              <p>
                To cancel or reschedule, go to "My Bookings" in your account
                and select the relevant booking. To request a refund for a
                completed service, use the "Report an Issue" option on that
                booking, or contact our support team directly with your
                order ID.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold">10. Contact Us</h2>
            <div className="mt-3 space-y-3 text-ink/80 leading-relaxed">
              <p>
                For any questions about cancellations or refunds, reach us at{" "}
                <span className="text-pink-600 font-medium">refunds@kaamlink.in</span>{" "}
                or through our Contact page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}